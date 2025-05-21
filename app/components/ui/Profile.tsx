import Button from "./Button";

const Profile = () => {
  return (
    <div className="flex items-center justify-between gap-2 mt-2">
      <div className="flex items-center gap-2">
        <div className="h-[60px] w-[60px] rounded-full bg-secondary"></div>
        <div>
          <p>John Doe</p>
          <p>john@gmail.com</p>
        </div>
      </div>
      <Button
        type="button"
        text="save"
        styles="px-10 py-2 transition-all hover:bg-secondary hover:text-primary"
      />
    </div>
  );
};

export default Profile;
