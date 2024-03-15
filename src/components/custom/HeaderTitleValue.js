import React from "react";

export default function HeaderTitleValue({ title, value, disableMl }) {
    return (
        <div className={`text-ethpays_white text-sm font-medium ${disableMl ? '-ml-6' : 'ml-6'}`}>
            <p className="text-ethpays_white-50 text-xs font-medium">{title}</p>
            <p className="text-ethpays_white text-[10px] font-medium">{value}</p>
        </div>
    );
}