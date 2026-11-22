import { ActivityFilter } from "./components/ActivityFilter";
import { ActivityForm } from "./components/ActivityForm";
import { ActivityList }  from "./components/ActivityList";
import { ActivityStats }  from "./components/ActivityStats";


import "./App.css";

export default function App() {
    return <div className="app-shell">
        <div className="app-header">

        </div>

        {/* activity statistic */}
        

        <main className="dashboard">
            <ActivityStats/>
            <section className="panel">
                {/* action form */}
                <ActivityForm/>
            </section>

            <section className="panel">
                {/* action filter*/}
                <ActivityFilter/>

                {/* action List */}
                <ActivityList/>

            </section>
        </main>
    </div>
}