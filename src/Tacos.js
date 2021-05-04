import React from "react";
import {withQueries} from "./withQueries";
import {useTacos} from "./queries";

const Tacos = () => {
    const {data: tacos} = useTacos();
    return (
        <>
            <p><strong>Tacos</strong></p>
            {
                tacos.map((t, i) => <p key={i}>{t}</p>)
            }
        </>
    );
};

export default withQueries(
    Tacos,
    [useTacos]
);
