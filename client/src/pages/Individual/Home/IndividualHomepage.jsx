import Header from "../../../components/Header/Header";
import TopBar from "../../../components/TopBar/TopBar";
import InvestmentByLocation from "../../../components/Investments/InvestmentByLocation";
function IndividualHomepage() {

    return (
        <> 
            <TopBar />
            <Header text={"Bonds, Local Community Bonding"}/>
            <InvestmentByLocation />
        </>
    )
}

export default IndividualHomepage;