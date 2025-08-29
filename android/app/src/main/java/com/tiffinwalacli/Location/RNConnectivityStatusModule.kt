package com.tiffinwalacli.Location

import android.bluetooth.BluetoothAdapter
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.content.pm.PackageManager
import android.location.LocationManager
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule

class RNConnectivityStatusModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    companion object {
        private const val RN_CONNECTIVITY_STATUS_TOPIC = "RNConnectivityStatus"
        private const val EVENT_TYPE = "eventType"
        private const val EVENT_STATUS = "status"

        // Location permission status
        private const val PERMISSION_LOCATION_GRANTED = "Location.Permission.Granted.Always"
        private const val PERMISSION_LOCATION_DENIED = "Location.Permission.Denied"
    }

    private val btReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context?, intent: Intent?) {
            val action = intent?.action
            if (BluetoothAdapter.ACTION_STATE_CHANGED == action) {
                val state = intent.getIntExtra(BluetoothAdapter.EXTRA_STATE, BluetoothAdapter.ERROR)
                val active = when (state) {
                    BluetoothAdapter.STATE_ON -> true
                    else -> false
                }

                val eventMap: WritableMap = WritableNativeMap().apply {
                    putString(EVENT_TYPE, "bluetooth")
                    putBoolean(EVENT_STATUS, active)
                }
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                    .emit(RN_CONNECTIVITY_STATUS_TOPIC, eventMap)
            }
        }
    }

    private val locationReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context?, intent: Intent?) {
            val locationEnabled =
                intent?.action == LocationManager.PROVIDERS_CHANGED_ACTION && checkLocationServices()

            val eventMap: WritableMap = WritableNativeMap().apply {
                putString(EVENT_TYPE, "location")
                putBoolean(EVENT_STATUS, locationEnabled)
            }
            reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit(RN_CONNECTIVITY_STATUS_TOPIC, eventMap)
        }
    }

    override fun getName(): String = "RNConnectivityStatus"

    override fun getConstants(): Map<String, Any> {
        return mapOf(
            "LocationGrantedAlways" to PERMISSION_LOCATION_GRANTED,
            "LocationDenied" to PERMISSION_LOCATION_DENIED
        )
    }

    override fun initialize() {
        super.initialize()

        val btFilter = IntentFilter().apply {
            addAction(BluetoothAdapter.ACTION_STATE_CHANGED)
        }
        reactContext.applicationContext.registerReceiver(btReceiver, btFilter)

        val locationFilter = IntentFilter().apply {
            addAction(LocationManager.PROVIDERS_CHANGED_ACTION)
        }
        reactContext.applicationContext.registerReceiver(locationReceiver, locationFilter)
    }

    @ReactMethod
    fun isBluetoothEnabled(promise: Promise) {
        try {
            promise.resolve(checkBluetooth())
        } catch (e: Exception) {
            promise.reject("BLE_CHECK_ERROR", e.message)
        }
    }

    @ReactMethod
    fun areLocationServicesEnabled(promise: Promise) {
        try {
            promise.resolve(checkLocationServices())
        } catch (e: Exception) {
            promise.reject("LOCATION_CHECK_ERROR", e.message)
        }
    }

    @ReactMethod
    fun isLocationPermissionGranted(promise: Promise) {
        try {
            if (checkLocationPermission()) {
                promise.resolve(PERMISSION_LOCATION_GRANTED)
            } else {
                promise.resolve(PERMISSION_LOCATION_DENIED)
            }
        } catch (e: Exception) {
            promise.reject("LOCATION_PERMISSION_CHECK_ERROR", e.message)
        }
    }

    // ---------------------
    // Private helper methods
    // ---------------------

    private fun checkBluetooth(): Boolean {
        val adapter = BluetoothAdapter.getDefaultAdapter()
        return adapter != null && adapter.isEnabled
    }

    private fun checkLocationServices(): Boolean {
        val locationManager =
            reactContext.getSystemService(Context.LOCATION_SERVICE) as? LocationManager
        return (locationManager?.isProviderEnabled(LocationManager.GPS_PROVIDER) == true) ||
                (locationManager?.isProviderEnabled(LocationManager.NETWORK_PROVIDER) == true)
    }

    private fun checkLocationPermission(): Boolean {
        return ContextCompat.checkSelfPermission(
            reactContext,
            android.Manifest.permission.ACCESS_FINE_LOCATION
        ) == PackageManager.PERMISSION_GRANTED
    }
}
