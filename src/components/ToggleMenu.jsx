import { useCallback, useState } from "react";
import { IonIcon } from "@ionic/react";
import { menu } from "ionicons/icons";
import { close } from "ionicons/icons";
import MobileNavMenu from "./MobileNavMenu";

function ToggleMenu() {
  const [IsOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((open) => !open), []);

  return (
    <>
      <div>
        {IsOpen ? (
          <button className="min-[790px]:hidden" onClick={toggleMenu}>
            <IonIcon icon={close} className="text-text-color text-3xl " />
          </button>
        ) : (
          <button className="min-[790px]:hidden" onClick={toggleMenu}>
            <IonIcon icon={menu} className="text-text-color text-3xl " />
          </button>
        )}
      </div>

      {IsOpen ? <MobileNavMenu /> : ""}
    </>
  );
}

export default ToggleMenu;
