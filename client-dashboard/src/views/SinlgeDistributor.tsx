import React from 'react'

function SinlgeDistributor() {
  return (
    <div className="row">
        <div className="col-md-8">
            
    <div className="row g-4 mb-4">
        <div className="col-md-4">
            <div className="card bg-cyan text-white-90">
                <div className="card-body d-flex align-items-center">
                    <i className="bi bi-box-seam display-7 me-3"></i>
                    <div>
                        <h4 className="mb-0">45</h4>
                        <span>My Orders</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card bg-purple text-white-90">
                <div className="card-body d-flex align-items-center">
                    <i className="bi bi-heart display-7 me-3"></i>
                    <div>
                        <h4 className="mb-0">5</h4>
                        <span>My Wishlist</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card bg-teal text-white-90">
                <div className="card-body d-flex align-items-center">
                    <i className="bi bi-wallet2 display-7 me-3"></i>
                    <div>
                        <h4 className="mb-0">$9,000</h4>
                        <span>My Profit</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="card mb-4">
        {/* <div className="card-body" style="position: relative;">
            <h6 className="card-title mb-4">Income by Month</h6>
            <div id="profit" style="min-height: 295px;"><div id="apexcharts99uq9l6c" className="apexcharts-canvas apexcharts99uq9l6c apexcharts-theme-light" style="width: 757.05px; height: 280px;"><svg id="SvgjsSvg1109" width="757.05" height="280" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(-15, 0)" style="background: transparent;"><g id="SvgjsG1111" className="apexcharts-inner apexcharts-graphical" transform="translate(45.359375, 30)"><defs id="SvgjsDefs1110"><clipPath id="gridRectMask99uq9l6c"><rect id="SvgjsRect1117" width="698.01875" height="216.348" x="-4" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMask99uq9l6c"><rect id="SvgjsRect1118" width="694.01875" height="216.348" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine1116" x1="0" y1="0" x2="0" y2="212.348" stroke="#b6b6b6" stroke-dasharray="3" className="apexcharts-xcrosshairs" x="0" y="0" width="1" height="212.348" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG1124" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1125" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1127" font-family="Helvetica, Arial, sans-serif" x="0" y="241.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1128">Jan</tspan><title>Jan</title></text><text id="SvgjsText1130" font-family="Helvetica, Arial, sans-serif" x="62.72897727272728" y="241.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1131">Feb</tspan><title>Feb</title></text><text id="SvgjsText1133" font-family="Helvetica, Arial, sans-serif" x="125.45795454545456" y="241.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1134">Mar</tspan><title>Mar</title></text><text id="SvgjsText1136" font-family="Helvetica, Arial, sans-serif" x="188.18693181818182" y="241.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1137">Apr</tspan><title>Apr</title></text><text id="SvgjsText1139" font-family="Helvetica, Arial, sans-serif" x="250.91590909090908" y="241.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1140">May</tspan><title>May</title></text><text id="SvgjsText1142" font-family="Helvetica, Arial, sans-serif" x="313.6448863636363" y="241.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1143">June</tspan><title>June</title></text><text id="SvgjsText1145" font-family="Helvetica, Arial, sans-serif" x="376.3738636363636" y="241.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1146">July</tspan><title>July</title></text><text id="SvgjsText1148" font-family="Helvetica, Arial, sans-serif" x="439.10284090909084" y="241.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1149">Aug</tspan><title>Aug</title></text><text id="SvgjsText1151" font-family="Helvetica, Arial, sans-serif" x="501.83181818181816" y="241.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1152">Sep</tspan><title>Sep</title></text><text id="SvgjsText1154" font-family="Helvetica, Arial, sans-serif" x="564.5607954545455" y="241.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1155">Oct</tspan><title>Oct</title></text><text id="SvgjsText1157" font-family="Helvetica, Arial, sans-serif" x="627.2897727272729" y="241.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1158">Nov</tspan><title>Nov</title></text><text id="SvgjsText1160" font-family="Helvetica, Arial, sans-serif" x="690.0187500000002" y="241.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1161">Dec</tspan><title>Dec</title></text></g><line id="SvgjsLine1162" x1="0" y1="213.348" x2="690.01875" y2="213.348" stroke="#e0e0e0" stroke-dasharray="0" stroke-width="1"></line></g><g id="SvgjsG1177" className="apexcharts-grid"><g id="SvgjsG1178" className="apexcharts-gridlines-horizontal"><line id="SvgjsLine1192" x1="0" y1="0" x2="690.01875" y2="0" stroke="#ededed" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1193" x1="0" y1="42.4696" x2="690.01875" y2="42.4696" stroke="#ededed" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1194" x1="0" y1="84.9392" x2="690.01875" y2="84.9392" stroke="#ededed" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1195" x1="0" y1="127.4088" x2="690.01875" y2="127.4088" stroke="#ededed" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1196" x1="0" y1="169.8784" x2="690.01875" y2="169.8784" stroke="#ededed" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1197" x1="0" y1="212.348" x2="690.01875" y2="212.348" stroke="#ededed" stroke-dasharray="0" className="apexcharts-gridline"></line></g><g id="SvgjsG1179" className="apexcharts-gridlines-vertical"></g><line id="SvgjsLine1180" x1="0" y1="213.348" x2="0" y2="219.348" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1181" x1="62.72897727272727" y1="213.348" x2="62.72897727272727" y2="219.348" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1182" x1="125.45795454545454" y1="213.348" x2="125.45795454545454" y2="219.348" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1183" x1="188.18693181818182" y1="213.348" x2="188.18693181818182" y2="219.348" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1184" x1="250.91590909090908" y1="213.348" x2="250.91590909090908" y2="219.348" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1185" x1="313.6448863636364" y1="213.348" x2="313.6448863636364" y2="219.348" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1186" x1="376.37386363636364" y1="213.348" x2="376.37386363636364" y2="219.348" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1187" x1="439.1028409090909" y1="213.348" x2="439.1028409090909" y2="219.348" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1188" x1="501.83181818181816" y1="213.348" x2="501.83181818181816" y2="219.348" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1189" x1="564.5607954545454" y1="213.348" x2="564.5607954545454" y2="219.348" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1190" x1="627.2897727272727" y1="213.348" x2="627.2897727272727" y2="219.348" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1191" x1="690.0187500000001" y1="213.348" x2="690.0187500000001" y2="219.348" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1199" x1="0" y1="212.348" x2="690.01875" y2="212.348" stroke="transparent" stroke-dasharray="0"></line><line id="SvgjsLine1198" x1="0" y1="1" x2="0" y2="212.348" stroke="transparent" stroke-dasharray="0"></line></g><g id="SvgjsG1119" className="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG1120" className="apexcharts-series" seriesName="Sales" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath1123" d="M 0 116.79140000000001C 21.95514204545454 116.79140000000001 40.77383522727273 169.87840000000006 62.72897727272726 169.87840000000006C 84.6841193181818 169.87840000000006 103.50281249999999 84.93920000000003 125.45795454545453 84.93920000000003C 147.41309659090908 84.93920000000003 166.23178977272724 42.469600000000014 188.1869318181818 42.469600000000014C 210.14207386363634 42.469600000000014 228.9607670454545 63.70440000000002 250.91590909090905 63.70440000000002C 272.8710511363636 63.70440000000002 291.6897443181818 148.64360000000005 313.6448863636363 148.64360000000005C 335.60002840909084 148.64360000000005 354.41872159090906 127.40880000000004 376.3738636363636 127.40880000000004C 398.3290056818181 127.40880000000004 417.1476988636363 116.79140000000001 439.10284090909084 116.79140000000001C 461.05798295454537 116.79140000000001 479.8766761363636 159.26100000000002 501.8318181818181 159.26100000000002C 523.7869602272726 159.26100000000002 542.6056534090908 127.40880000000004 564.5607954545453 127.40880000000004C 586.5159374999998 127.40880000000004 605.3346306818181 84.93920000000003 627.2897727272726 84.93920000000003C 649.2449147727272 84.93920000000003 668.0636079545453 148.64360000000005 690.0187499999998 148.64360000000005" fill="none" fill-opacity="1" stroke="rgba(255,110,64,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="4" stroke-dasharray="0" className="apexcharts-line" index="0" clip-path="url(#gridRectMask99uq9l6c)" pathTo="M 0 116.79140000000001C 21.95514204545454 116.79140000000001 40.77383522727273 169.87840000000006 62.72897727272726 169.87840000000006C 84.6841193181818 169.87840000000006 103.50281249999999 84.93920000000003 125.45795454545453 84.93920000000003C 147.41309659090908 84.93920000000003 166.23178977272724 42.469600000000014 188.1869318181818 42.469600000000014C 210.14207386363634 42.469600000000014 228.9607670454545 63.70440000000002 250.91590909090905 63.70440000000002C 272.8710511363636 63.70440000000002 291.6897443181818 148.64360000000005 313.6448863636363 148.64360000000005C 335.60002840909084 148.64360000000005 354.41872159090906 127.40880000000004 376.3738636363636 127.40880000000004C 398.3290056818181 127.40880000000004 417.1476988636363 116.79140000000001 439.10284090909084 116.79140000000001C 461.05798295454537 116.79140000000001 479.8766761363636 159.26100000000002 501.8318181818181 159.26100000000002C 523.7869602272726 159.26100000000002 542.6056534090908 127.40880000000004 564.5607954545453 127.40880000000004C 586.5159374999998 127.40880000000004 605.3346306818181 84.93920000000003 627.2897727272726 84.93920000000003C 649.2449147727272 84.93920000000003 668.0636079545453 148.64360000000005 690.0187499999998 148.64360000000005" pathFrom="M -1 467.16560000000004L -1 467.16560000000004L 62.72897727272726 467.16560000000004L 125.45795454545453 467.16560000000004L 188.1869318181818 467.16560000000004L 250.91590909090905 467.16560000000004L 313.6448863636363 467.16560000000004L 376.3738636363636 467.16560000000004L 439.10284090909084 467.16560000000004L 501.8318181818181 467.16560000000004L 564.5607954545453 467.16560000000004L 627.2897727272726 467.16560000000004L 690.0187499999998 467.16560000000004"></path><g id="SvgjsG1121" className="apexcharts-series-markers-wrap" data:realIndex="0"><g className="apexcharts-series-markers"><circle id="SvgjsCircle1205" r="0" cx="0" cy="0" className="apexcharts-marker wdq7z0jx8 no-pointer-events" stroke="#ffffff" fill="#ff6e40" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG1122" className="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine1200" x1="0" y1="0" x2="690.01875" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine1201" x1="0" y1="0" x2="690.01875" y2="0" stroke-dasharray="0" stroke-width="0" className="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1202" className="apexcharts-yaxis-annotations"></g><g id="SvgjsG1203" className="apexcharts-xaxis-annotations"></g><g id="SvgjsG1204" className="apexcharts-point-annotations"></g></g><rect id="SvgjsRect1115" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG1163" className="apexcharts-yaxis" rel="0" transform="translate(15.359375, 0)"><g id="SvgjsG1164" className="apexcharts-yaxis-texts-g"><text id="SvgjsText1165" font-family="Helvetica, Arial, sans-serif" x="20" y="31.5" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1166">220</tspan></text><text id="SvgjsText1167" font-family="Helvetica, Arial, sans-serif" x="20" y="73.9696" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1168">200</tspan></text><text id="SvgjsText1169" font-family="Helvetica, Arial, sans-serif" x="20" y="116.4392" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1170">180</tspan></text><text id="SvgjsText1171" font-family="Helvetica, Arial, sans-serif" x="20" y="158.90879999999999" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1172">160</tspan></text><text id="SvgjsText1173" font-family="Helvetica, Arial, sans-serif" x="20" y="201.3784" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1174">140</tspan></text><text id="SvgjsText1175" font-family="Helvetica, Arial, sans-serif" x="20" y="243.848" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#b8b8b8" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1176">120</tspan></text></g></g><g id="SvgjsG1112" className="apexcharts-annotations"></g></svg><div className="apexcharts-legend" style="max-height: 140px;"></div><div className="apexcharts-tooltip apexcharts-theme-light"><div className="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div><div className="apexcharts-tooltip-series-group" style="order: 1;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(255, 110, 64);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-label"></span><span className="apexcharts-tooltip-text-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"><div className="apexcharts-xaxistooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text"></div></div></div></div>
        <div className="resize-triggers"><div className="expand-trigger"><div style="width: 784px; height: 391px;"></div></div><div className="contract-trigger"></div></div></div> */}
    </div>
    <div className="card mb-4">
        <div className="card-body">
            <h6 className="card-title mb-4">Recent Activities</h6>
            <ul className="list-group list-group-flush">
                <li className="px-0 list-group-item d-flex align-items-center">
                    <div className="flex-shrink-0">
                        <div className="avatar avatar-warning me-3">
                            <span className="avatar-text fw-bold rounded-circle">
                                <i className="bi bi-file-text"></i>
                            </span>
                        </div>
                    </div>
                    <div className="flex-grow-1 d-md-flex">
                        <div className="flex-fill mb-1 mb-lg-0">
                            <p className="mb-1">
                                Your billing information is not active.
                            </p>
                            <span className="text-muted small">
                                <i className="bi bi-clock me-1"></i> Yesterday
                            </span>
                        </div>
                        <a href="#">Show</a>
                    </div>
                </li>
                <li className="px-0 list-group-item d-flex align-items-center">
                    <div className="flex-shrink-0">
                        <div className="avatar avatar-warning me-3">
                            <span className="avatar-text rounded-circle">
                                <i className="bi bi-person"></i>
                            </span>
                        </div>
                    </div>
                    <div className="flex-grow-1 d-md-flex">
                        <div className="flex-fill mb-1 mb-lg-0">
                            <p className="mb-1">
                                Your subscription has expired.
                            </p>
                            <span className="text-muted small">
                                <i className="bi bi-clock me-1"></i> Today
                            </span>
                        </div>
                        <a href="#">Show</a>
                    </div>
                </li>
                <li className="px-0 list-group-item d-flex align-items-center">
                    <div className="flex-shrink-0">
                        <div className="avatar avatar-warning me-3">
                            <span className="avatar-text rounded-circle">
                                <i className="bi bi-hdd"></i>
                            </span>
                        </div>
                    </div>
                    <div className="flex-grow-1 d-md-flex">
                        <div className="flex-fill mb-1 mb-lg-0">
                            <p className="mb-1">
                                Your storage space is running low
                            </p>
                            <span className="text-muted small">
                                <i className="bi bi-clock me-1"></i> Last Week
                            </span>
                        </div>
                        <a href="#">Show</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>

        </div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <ul className="nav nav-pills flex-column gap-2">
                        <li className="nav-item">
                            <a className="nav-link  active " href="buyer-dashboard.html">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="buyer-orders.html">My Orders</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="buyer-addresses.html">My Addresses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="buyer-wishlist.html">Wishlist</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SinlgeDistributor