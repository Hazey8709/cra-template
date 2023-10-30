import React, { useState, useEffect } from "react";
// import UserPic from "./UserPic";
import { Link } from "react-router-dom";

const Nav = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchApi() {
            const response = await fetch("");
            const data = await response.json();
            const [user] = data.results;
            // console.log(user);

            setUserData(user);
        }
        fetchApi();
    }, []);

    return (
        <nav style={style.navCont}>
            {/* <div style={style.picCont}>
                {userData && <UserPic avatar={userData.picture.large} />}
            </div> */}

            <section style={style.navBtnCont}>
                <Link to='/' style={style.navLink}>
                    Dashboard
                </Link>

                <Link to='/' style={style.navLink}>
                    Link
                </Link>

                <Link to='/' style={style.navLink}>
                    Link
                </Link>

                <Link to='/' style={style.navLink}>
                    Link
                </Link>

                <Link to='/' style={style.navLink}>
                    Link
                </Link>
            </section>
        </nav>
    );
};

export default Nav;

const style = {
    navCont: {},

    navBtnCont: {},

    navLink: {},
};
