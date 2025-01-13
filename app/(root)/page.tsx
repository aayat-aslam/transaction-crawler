import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () =>{
    const loggedIn = { firstName: 'Aslam', lastName: 'Ansari', email: 'www.aslam004@gmail.com'}
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user="Aslam"
                        subtext="Access and manage your own account and transaction efficiently."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={3}
                        totalCurrentBalance={65334}
                    />
                </header>
            </div>
            <RightSidebar
                user = {loggedIn}
                transactions = {[]}
                banks = {[{currentBalance: 653.73}, {currentBalance: 542.33}]}
            />
        </section>
    )
}

export default Home;