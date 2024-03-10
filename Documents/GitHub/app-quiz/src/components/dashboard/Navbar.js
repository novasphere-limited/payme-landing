import Button from "../Button";

export default function Navbar() {
  return (
    <div className="bg-white flex justify-between py-[20px] px-[40px] gap-2 items-center h-[94px]">
      <div>
        <img
          src="/assets/favicon_io/quiz-menu.svg"
          height={24}
          width={24}
          alt="Hamburger icon"
        />
      </div>
      <ul className="flex gap-3 items-center">
        <li>
          <Button
            text="Update your institution"
            style={{
              color: "#fff",
              backgroundColor: "#EF4444",
              padding: "12px 8px",
              borderRadius: "6px",
            }}
          />
        </li>
        <li>
          <img
            src="/assets/favicon_io/quiz-notifier.svg"
            height={24}
            width={24}
            alt="Bell icon"
          />
        </li>
        <li>
          <img
            src="/assets/images/quiz-profile.png"
            height={48}
            width={48}
            alt="User icon"
          />
        </li>
      </ul>
    </div>
  );
}
