import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function SocialMetricsMap() {
    const rows = [
        {
            journey: "Awareness",
            icon: "fa-solid fa-mobile-screen",
            objective: "Create awareness",
            strategy: "Expose target audience to brand content",
            activity: "Post promotions (boosts)",
            kpis: "Impressions, reach",
            impact: "SOV, TOMA"
        },
        {
            journey: "Consideration",
            icon: "fa-solid fa-scale-balanced",
            objective: "Generate demand",
            strategy: "Generate engagement of target audience with brand content",
            activity: "Post, responses",
            kpis: "#of engagements, types of engagements",
            impact: "Visitors/traffic (online or offline)"
        },
        {
            journey: "Decision",
            icon: "fa-solid fa-clipboard-check",
            objective: "Drive Conversion",
            strategy: "Drive target audience to brand offers",
            activity: "Post, promotions",
            kpis: "Link clicks",
            impact: "Conversions (purchases, lead submissions, app download, etc.)"
        },
        {
            journey: "Adoption",
            icon: "fa-solid fa-user-check",
            objective: "Delight customers",
            strategy: "Drive with engagement with brand product/services",
            activity: "Responses (i.e., Social customer care)",
            kpis: "(positive) earned mentions, customer care metrics (responses time & qty)",
            impact: "Sentiment and satisfaction"
        },
        {
            journey: "Advocacy",
            icon: "fa-solid fa-share-nodes",
            objective: "Inspire evangelism",
            strategy: "Activate customers influencers",
            activity: "Post outreachs to influencers, reshares",
            kpis: "Earned impressions, earned reach, social UGC",
            impact: "Referrals, influencer activity, positive word of mouth, NPS"
        }
    ];

    return (
        <section className="social-metrics-section">
            <div className="container">
                <AnimateOnScroll animation="fadeInUp" speed="normal">
                    <div className="text-center mb-5">
                        <h2 className="metrics-title">Social Metrics Map</h2>
                    </div>
                </AnimateOnScroll>
                
                <AnimateOnScroll animation="fadeInUp" speed="normal">
                    <div className="metrics-table-wrapper">
                        <table className="metrics-table">
                            <thead>
                                <tr>
                                    <th>Buyers Journey</th>
                                    <th>Objective</th>
                                    <th>Social media Strategy</th>
                                    <th>Social activity</th>
                                    <th>Social KPI's</th>
                                    <th>Business Impact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={index}>
                                        <td className="journey-col">
                                            <div className="journey-cell-content">
                                                <div className="journey-icon-box">
                                                    <i className={`${row.icon} journey-icon`}></i>
                                                </div>
                                                <span className="journey-name">{row.journey}</span>
                                            </div>
                                        </td>
                                        <td>{row.objective}</td>
                                        <td>{row.strategy}</td>
                                        <td>{row.activity}</td>
                                        <td>{row.kpis}</td>
                                        <td className="impact-col">{row.impact}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}

export default SocialMetricsMap;
