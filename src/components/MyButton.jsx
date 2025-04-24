import React from "react";
import {Button} from "@heroui/react";

function MyButton({value}) {
    return (
        <>
            <Button color="success" variant="ghost">
                {value}
            </Button>
        </>
    );
}

export default MyButton;
