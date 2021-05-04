import {withQueries} from "./withQueries";
import {useSandwiches, useTacos} from "./queries";

const Sandwiches = () => {
    const {data: sandwiches} = useSandwiches();
    const {data: tacos} = useTacos();
    return (
        <>
            <p><strong>Sandwiches</strong></p>
            {
                sandwiches.map((t, i) => <p key={i}>{t}</p>)
            }
            <i>Please a look at our selection of {tacos.length} tacos.</i>
        </>
    );
};

export default withQueries(
    Sandwiches,
    [useSandwiches, useTacos]
);
