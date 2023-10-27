import { MouseEventHandler } from "react";
import { Url } from "url";

// export interface CustomButtonProps{
//     title: string;
//     containerStyles?:string;
//     handleClick?:
//     MouseEventHandler<HTMLButtonElement>;
// }
export interface CardProps{
    first_name: string;
    last_name: string;
    prefix?: string;
    suffix?: string;
    pronouns?:string;
    company?:string;
    designation?: string;
    summary?: string;
    phone?: string;
    email?: string;
    website?: string;
    company_logo?: string;
    work_address?: string;
    facebook_url?: string;
    instagram_url?: string;
    linkedin_url?: string;
    telegram_url?: string;
    twitter_url?: string;
    font_style?: string;
    title_size?: string;
    primary_color?: string;
    secondary_color?: string;
    auto_generated?:boolean;
    self_domain?:string;
    enable_tcs?:boolean;
    parentProps?: (name: string,value:string) => void



}