"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer: React.FC = () => {
    const router = useRouter();

    const gotoGithub = (): void => {
        router.push("https://github.com/pankajkoree");
    };

    const gotoLinkedIn = (): void => {
        router.push("https://www.linkedin.com/in/pankaj-koree/");
    };

    const gotoSololearn = (): void => {
        router.push("https://www.sololearn.com/en/profile/13478902");
    };

    const gotoYoutube = (): void => {
        router.push("https://www.youtube.com/@pankajkori");
    };

    return (
        <div className="relative flex flex-col justify-center top-2 xl:top-4 gap-2 xl:gap-4 text-gray-600 dark:text-gray-400 text-[16px] xl:text-xl transition-colors duration-300">
            <div className="relative flex justify-center gap-3 xl:gap-6">
                <p
                    className="hover:cursor-pointer hover:text-blue-500 hover:underline dark:hover:text-blue-400"
                    onClick={gotoGithub}
                >
                    Github ↗
                </p>

                <p
                    className="hover:cursor-pointer hover:text-blue-500 hover:underline dark:hover:text-blue-400"
                    onClick={gotoLinkedIn}
                >
                    Linkedin ↗
                </p>

                <p
                    className="hover:cursor-pointer hover:text-blue-500 hover:underline dark:hover:text-blue-400"
                    onClick={gotoYoutube}
                >
                    Youtube ↗
                </p>

                <p
                    className="hover:cursor-pointer hover:text-blue-500 hover:underline dark:hover:text-blue-400"
                    onClick={gotoSololearn}
                >
                    SoloLearn ↗
                </p>
            </div>

            <div className="relative flex justify-center">
                <p>
                    © 2025{" "}
                    <Link
                        className="underline hover:text-blue-500 dark:hover:text-blue-400"
                        href="https://github.com/pankajkoree"
                    >
                        Pankaj Kori
                    </Link>{" "}
                    . All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
