function Main() {
    return (
        <>
            <Sec text="Hallo von Main" />
        </>
    );
}

function Sec({ text }) {
    return <>{text}</>;
}

export default Main;
