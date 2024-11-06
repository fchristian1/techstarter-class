import { useState } from "react";
import Button from "./components/Button";
import LagerPage from "./pages/lager/lager.page";

function App() {
    const [menu, setMenu] = useState(false);
    return (
        <div className="flex flex-col items-center m-2 w-1/2 ">
            <div className="flex gap-2">
                <Button active={menu === "home" ? "true" : "false"} onClick={() => setMenu("home")}>
                    Home
                </Button>
                <Button active={menu === "lager" ? "true" : "false"} onClick={() => setMenu("lager")}>
                    Lager
                </Button>
            </div>
            <div className="flex flex-col w-full items-center">
                {menu === "home" && (
                    <div>
                        <div className="text-xl">Home</div>
                        Willkommen auf der Lagerseite hier können sie ihre Lagerverwaltung durchführen
                    </div>
                )}
                {menu === "lager" && <LagerPage></LagerPage>}
            </div>
        </div>
    );
}

export default App;
