
interface ProfileOptionCardProps {
    title: string;
    icon: string;
    func: () => void;
    description?: string;
    showArrow?: boolean;
    showSwitch?: boolean;
    isEnabled?: boolean;
    onToggle?: () => void;
}
interface Profile {
    name: string;
    email: string;
    phone: string;
    address: string;
    bio: string;
    gender: string;
    profileImage: string | null;
    latitude: number | null;
    longitude: number | null;
}
export { ProfileOptionCardProps, Profile }