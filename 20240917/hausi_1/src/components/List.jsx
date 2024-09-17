import { useState } from "react";
function List() {
    const [textList, setTextList] = useState(["first"]);
    return (
        <>
            <div>
                <input
                    id="HTMLInputText"
                    placeholder="Text für die Liste"
                    type="text"
                />
                <button
                    onClick={() => {
                        if (HTMLInputText.value.trim() == "") {
                            return;
                        }
                        setTextList([...textList, HTMLInputText.value]);
                        HTMLInputText.value = "";
                    }}
                >
                    Add
                </button>
            </div>
            <div>
                {textList.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </>
    );
}
export default List;
