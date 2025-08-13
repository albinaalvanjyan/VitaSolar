export default function Calculator({
  dailyUsage,
  sunHours,
  panelWatt,
  systemLoss,
  costPerKwh,
  panelCost
}) {
  const r = (v, d=2) => Math.round((v + Number.EPSILON) * 10**d) / 10**d;

  const usage = Number(dailyUsage) || 0;
  const hours = Number(sunHours) || 0;
  const watt = Number(panelWatt) || 0;
  const loss = Number(systemLoss) || 0;
  const priceKwh = Number(costPerKwh) || 0;
  const costPanel = Number(panelCost) || 0;

  const pKwhDay = (watt * hours / 1000) * (1 - loss);
  const panels = pKwhDay > 0 ? Math.ceil(usage / pKwhDay) : 0;
  const sysKw = (panels * watt) / 1000;
  const dayProd = pKwhDay * panels;

  return {
    panelKwhPerDay: r(pKwhDay, 3),
    panelsNeeded: panels,
    systemSizeKw: r(sysKw),
    dailyProduction: r(dayProd),
    monthlyProduction: r(dayProd * 30, 1),
    yearlyProduction: r(dayProd * 365, 1),
    totalPanelCost: r(panels * costPanel),
    simplePaybackYears: panels
      ? r((panels * costPanel) / (dayProd * 365 * priceKwh))
      : null,
    offsetPercent: usage
      ? r(Math.min(100, (dayProd / usage) * 100), 1)
      : 0
  };
}
