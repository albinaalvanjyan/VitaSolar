import React, { useState } from "react";
import SectionAnimation from "../SectionAnimation/SectionAnimation";
import Calculator from './../Calculator/Calculator';
import Label from './../Label/Label';
import s from './CalculatorRender.module.scss'
export default function SolarCalculator() {
    const [dailyUsage, setDailyUsage] = useState(30);
    const [sunHours, setSunHours] = useState(4);
    const [panelWatt, setPanelWatt] = useState(400);
    const [systemLoss, setSystemLoss] = useState(0.15);
    const [costPerKwh, setCostPerKwh] = useState(0.12);
    const [panelCost, setPanelCost] = useState(250);

    const results = Calculator({
        dailyUsage,
        sunHours,
        panelWatt,
        systemLoss,
        costPerKwh,
        panelCost
    });

    return (
        <SectionAnimation id="calculator" className={s.section}>
            <div className={`container ${s.content}`}>
                <SectionAnimation direction="left" delay={0} className={s.content_left}>
                    <h2 className="h2">Solar Energy Calculator</h2>

                    <Label
                        label="Daily electricity use (kWh):"
                        value={dailyUsage}
                        onChange={setDailyUsage}
                        step={0.1}
                        min={0}
                    />

                    <Label
                        label="Average peak sun hours / day:"
                        value={sunHours}
                        onChange={setSunHours}
                        step={0.1}
                        min={0}
                    />

                    <Label
                        label="Panel wattage (W):"
                        value={panelWatt}
                        onChange={setPanelWatt}
                        step={10}
                        min={50}
                    />

                    <Label
                        label="System losses (fraction 0–1):"
                        value={systemLoss}
                        onChange={setSystemLoss}
                        step={0.01}
                        min={0}
                        max={0.5}
                    />

                    <Label
                        label="Cost per kWh ($):"
                        value={costPerKwh}
                        onChange={setCostPerKwh}
                        step={0.01}
                        min={0}
                    />

                    <Label
                        label="Estimated cost per panel ($):"
                        value={panelCost}
                        onChange={setPanelCost}
                        step={1}
                        min={0}
                    />
                </SectionAnimation>

                <SectionAnimation  direction="right" delay={100} className={s.content_right}>
                    <h2 className="h2">Results:</h2>
                    <div className={s.resultItem}>
                        <span className={s.resultLabel}>Energy per panel/day:</span>
                        <span className={s.resultValue}>{results.panelKwhPerDay} kWh</span>
                    </div>
                    <div className={s.resultItem}>
                        <span className={s.resultLabel}>Panels required:</span>
                        <span className={s.resultValue}>{results.panelsNeeded}</span>
                    </div>
                    <div className={s.resultItem}>
                        <span className={s.resultLabel}>System size:</span>
                        <span className={s.resultValue}>{results.systemSizeKw} kW</span>
                    </div>
                    <div className={s.resultItem}>
                        <span className={s.resultLabel}>Daily / Monthly / Yearly production:</span>
                        <span className={s.resultValue}>
                            {results.dailyProduction} / {results.monthlyProduction} / {results.yearlyProduction} kWh
                        </span>
                    </div>
                    <div className={s.resultItem}>
                        <span className={s.resultLabel}>Estimated panel cost:</span>
                        <span className={s.resultValue}>${results.totalPanelCost}</span>
                    </div>
                    <div className={s.resultItem}>
                        <span className={s.resultLabel}>Estimated payback:</span>
                        <span className={s.resultValue}>
                            {results.simplePaybackYears ? results.simplePaybackYears + " years" : "—"}
                        </span>
                    </div>
                    <div className={s.resultItem}>
                        <span className={s.resultLabel}>Energy offset:</span>
                        <span className={s.resultValue}>{results.offsetPercent}%</span>
                    </div>
                </SectionAnimation>
            </div>
        </SectionAnimation>
    );
}
