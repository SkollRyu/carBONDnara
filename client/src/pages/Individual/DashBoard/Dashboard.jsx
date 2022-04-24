import Header from "../../../components/Header/Header";
import TopBar from "../../../components/TopBar/TopBar";
import DashBoardBody from "../../../components/DashBoard/DashBoardBody";

function Dashboard(){
    return(
        <>
            <TopBar />
            {/* <Header text={"Your Dashboard"}/> */}
            <DashBoardBody />
        </>
    )
}

export default Dashboard;