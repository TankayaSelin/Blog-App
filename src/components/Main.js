import CardList from "./CardList";
import SidebarLayout from "./sidebar/SidebarLayout";


const Main = () => {
    return ( 
        <div className="main-container">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <CardList/>
                    </div>
                    <div className="col-4">
                        <SidebarLayout/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Main;