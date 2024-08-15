"use client";
import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
// import {axios} from "axios";
import loginBackgroundImage from "../../utility/images/login_background_image.jpg";
import formCover from "../../utility/images/form_cover.png";

export default function LoginPage() {

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });

    const onLogin = async () => {

    }

    return (
        <div className="login-background flex flex-col items-center justify-center min-h-screen py-2"
             style={{backgroundImage: `url(${loginBackgroundImage.src})`}}>
            <div className="loginForm grid lg:grid-cols-2">
                <div className="form-cover w-full" style={{backgroundImage: `url(${formCover.src})`}}>
                    <h2>Welcome to <br/>
                        Smart Garden!</h2>
                    <p>To keep connected with us <br className="line-breaker"/>
                        please sign up with your personal <br className="line-breaker"/>
                         information</p>
                    <button type="submit"> Sign Up </button>
                </div>
                <div className="form-content w-full">
                    <form className="flex">
                        <label className="inline-grid w-full">
                            <h2>Login Now</h2>
                            <p>To keep connected with us please sign in with your personal information</p>
                            <input type="email" className="mt-6" placeholder="yourname@email.com"/>
                            <input type="password" className="mt-5" placeholder="password"/>
                            <div className="flex items-center mt-5 link-area relative">
                                <div className="remind-password absolute left-0">
                                    <input id="remind-password" type="checkbox" value="" className="check-box"/>
                                    <label htmlFor="remind-password" className="check-box-text">Remind my
                                        password</label>
                                </div>
                                <a className="forget-password absolute right-0" href="#">Forget Password</a>
                            </div>
                            <button className="mt-8 transition duration-700" type="submit">Login</button>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}