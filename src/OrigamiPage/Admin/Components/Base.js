import BaseAvatars from "./BaseAvatars";
import BaseTyphography from "./BaseTyphography";
import BaseButtons from './BaseButtons'
import AdminNav from "./AdminNav";


import React from 'react'

export default function Base() {
    return (
        <>
            <AdminNav/>
            <div className="base-list">
            <BaseAvatars/>
            <BaseButtons/>
            <BaseTyphography/>
            </div>
        </>
    )
}
