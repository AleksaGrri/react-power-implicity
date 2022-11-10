import { Header } from "./components/Header/Header";
import { HeaderAdaptive } from "./components/HeaderAdaptive/HeaderAdaptive";
import { Slider } from "./components/Slider/Slider";
import "./main.scss";

export const App = () => {
    return (
        <section className="container">
            <Header />
            <HeaderAdaptive />
            <Slider />
        </section>
    );
};