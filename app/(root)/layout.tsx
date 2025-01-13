import React from "react";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

const RootLayout = (
    {children,}: Readonly<{
        children: React.ReactNode
    }>
) => {
    const loggedIn = { firstName: 'Aslam', lastName: 'Ansari'}
    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={{
                $id: "",
                email: "",
                userId: "",
                dwollaCustomerUrl: "",
                dwollaCustomerId: "",
                firstName: "",
                lastName: "",
                name: "",
                address1: "",
                city: "",
                state: "",
                postalCode: "",
                dateOfBirth: "",
                ssn: ""
            }} {...loggedIn}/>
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image
                        src="/icons/logo.svg"
                        width={30}
                        height={30}
                        alt="menue icon"
                    />
                    <div>
                        <MobileNav user={{
                            $id: "",
                            email: "",
                            userId: "",
                            dwollaCustomerUrl: "",
                            dwollaCustomerId: "",
                            firstName: "",
                            lastName: "",
                            name: "",
                            address1: "",
                            city: "",
                            state: "",
                            postalCode: "",
                            dateOfBirth: "",
                            ssn: ""
                        }} {...loggedIn}/>
                    </div>
                </div>
                {children}
            </div>
        </main>
    )
}

export default RootLayout;