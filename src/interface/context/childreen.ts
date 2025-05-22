interface popupType {
  status: Boolean;
  message: String;
  type: String;
  title: String;
  func: () => void;
}
interface ContextTypeInterface {
  popup: popupType;
  setPopup: React.Dispatch<React.SetStateAction<popupType>>;
  UserFprofile: any;
  setUserProfile: React.Dispatch<React.SetStateAction<any>>;
  location: any;
  setLocation: React.Dispatch<React.SetStateAction<any>>;
  userTemLocation: any;
  setUserTemLocation: React.Dispatch<React.SetStateAction<any>>;
}
export {popupType, ContextTypeInterface};
