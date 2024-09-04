import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-[200px] h-[100px] bg-white shadow-md rounded-md border border-gray-200 flex-column items-center justify-center p-4">
        <Button
          label="login"
          onClick={() => alert("login")}
          variant="loginPrimary"
        />
        {/* <Button
          label="login"
          onClick={() => alert("login")}
          variant="loginSecondary"
        />
        <Button
          label="login"
          onClick={() => alert("login")}
          variant="buttonLarge"
        />
        <Button
          label="login"
          onClick={() => alert("login")}
          variant="buttonSmall"
        />
        <Button
          label="login"
          onClick={() => alert("login")}
          variant="buttonLargeWithBold"
        />
        <Button
          label="login"
          onClick={() => alert("login")}
          variant="buttonWithArrow"
        /> */}
      </div>
    </>
  );
}
