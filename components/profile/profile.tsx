import Image from "next/image";
import classnames from "classnames";

import style from "./profile.module.scss";

interface Image {
  url: string;
  width: number;
  height: number;
}

interface ProfileProps {
  children: React.ReactNode;
  image?: Image;
  flipped?: boolean;
}

const Profile = ({ children, image, flipped = false }: ProfileProps) => (
  <div
    className={classnames({
      [style.profile]: true,
      [style.flipped]: flipped,
    })}
  >
    {image ? (
      <div className={classnames([style.block, style.image])}>
        <Image height={image.height} width={image.width} src={image.url} />
      </div>
    ) : null}

    <div className={style.block}>{children}</div>
  </div>
);

export default Profile;
