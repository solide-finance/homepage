import { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { Collapse, Carousel } from "antd";

import { motion } from "framer-motion";
import "./ServicesComponent.scss";

import NeArrow from "../../assets/v2/ne-arrow.svg?react";
import SvcInterbank from "../../assets/v2/svc-interbank.svg?react";
import SvcInterop from "../../assets/v2/svc-interop.svg?react";
import SvcMonetize from "../../assets/v2/svc-monetize.svg?react";
import SvcNetwork from "../../assets/v2/svc-network.svg?react";
import SvcOnOffRamp from "../../assets/v2/svc-onofframp.svg?react";
import SvcOpenBanking from "../../assets/v2/svc-openbanking.svg?react";
import SvcPaymentsInfra from "../../assets/v2/svc-paymentsinfra.svg?react";
import SvcStablecoins from "../../assets/v2/svc-stablecoins.svg?react";
import F6SBadge from "../../assets/v2/F6S_Patch.png";

interface ServicesComponentProps {
  nav: string;
}

export default function ServicesComponent({ nav }: ServicesComponentProps) {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const tab1Services = [
    {
      icon: <SvcPaymentsInfra />,
      title: "Payments infrastructure",
      desc: (
        <span>
          SolideFinance provides banks with an{" "}
          <strong>
            intermediary-free EUR/USD payment infrastructure, delivering faster transactions, reduced costs, and
            real-time (T+0) settlement.
          </strong>{" "}
          By optimizing FX processes, financial institutions can enhance profitability, competitiveness, and transaction
          transparency, ensuring compliance while staying ahead in the evolving financial landscape.
        </span>
      )
    },
    {
      icon: <SvcNetwork />,
      title: "A worldwide network of correspondent banking",
      desc: (
        <span>
          {" "}
          With <strong>SolideNetwork</strong>, banks gain access to a{" "}
          <strong>global correspondent banking network</strong> spanning both{" "}
          <strong>traditional and decentralized finance</strong> (where compliance allows). This network enables
          institutions to{" "}
          <strong>expand into new markets, optimize cross-border payment flows, and enhance financial services</strong>{" "}
          while ensuring adherence to regulatory requirements.
        </span>
      )
    },
    {
      icon: <SvcMonetize />,
      title: "Cash pooling management",
      desc: (
        <span>
          SolideFinance’s <strong>cash pooling solution</strong> allows banks to offer corporate clients seamless
          liquidity management across multiple currencies. The technology centralizes control over{" "}
          <strong>
            multi-currency accounts from a single access point, enabling low-cost fund transfers and consolidated
            treasury operations
          </strong>{" "}
          as if managed in a single currency, enhancing efficiency and financial oversight.
        </span>
      )
    },
    {
      icon: <SvcInterop />,
      title: "Interoperability & Access to digital assets",
      desc: (
        <span>
          {" "}
          Financial institutions looking to expand their <strong>digital asset offerings</strong> can leverage{" "}
          <strong>SolideFinance’s secure on- and off-ramp infrastructure</strong> with cross-chain interoperability.
          This enables seamless access to digital finance services while integrating traditional financial products into
          decentralized finance, supporting innovation while maintaining compliance and risk management standards.
        </span>
      )
    }
  ];

  const tab2Services = [
    {
      icon: <SvcPaymentsInfra />,
      title: "Payments infrastructure",
      desc: (
        <span>
          SolideFinance provides banks with an{" "}
          <strong>
            intermediary-free EUR/USD payment infrastructure, delivering faster transactions, reduced costs, and
            real-time (T+0) settlement.
          </strong>{" "}
          By optimizing FX processes, financial institutions can enhance profitability, competitiveness, and transaction
          transparency, ensuring compliance while staying ahead in the evolving financial landscape.
        </span>
      )
    },
    {
      icon: <SvcNetwork />,
      title: "A worldwide network of correspondent banking",
      desc: (
        <span>
          {" "}
          With <strong>SolideNetwork</strong>, banks gain access to a{" "}
          <strong>global correspondent banking network</strong> spanning both{" "}
          <strong>traditional and decentralized finance</strong> (where compliance allows). This network enables
          institutions to{" "}
          <strong>expand into new markets, optimize cross-border payment flows, and enhance financial services</strong>{" "}
          while ensuring adherence to regulatory requirements.
        </span>
      )
    },
    {
      icon: <SvcOpenBanking />,
      title: "Open banking infrastructure",
      desc: (
        <span>
          {" "}
          SolideFinance’s technology enables financial institutions to seamlessly deploy{" "}
          <strong>cost-efficient and scalable core banking infrastructure</strong>, supporting both{" "}
          <strong>local and international currencies</strong>. Neo Banks can leverage our infrastructure and
          certifications to enhance their{" "}
          <strong>banking services, optimize operational efficiency, and expand their financial offerings</strong> with
          a robust and compliant foundation.{" "}
        </span>
      )
    }
  ];

  const tab3Services = [
    {
      icon: <SvcPaymentsInfra />,
      title: "Payments infrastructure",
      desc: (
        <span>
          SolideFinance provides banks with an{" "}
          <strong>
            intermediary-free EUR/USD payment infrastructure, delivering faster transactions, reduced costs, and
            real-time (T+0) settlement.
          </strong>{" "}
          By optimizing FX processes, financial institutions can enhance profitability, competitiveness, and transaction
          transparency, ensuring compliance while staying ahead in the evolving financial landscape.
        </span>
      )
    },
    {
      icon: <SvcNetwork />,
      title: "A worldwide network of correspondent banking",
      desc: (
        <span>
          {" "}
          With <strong>SolideNetwork</strong>, banks gain access to a{" "}
          <strong>global correspondent banking network</strong> spanning both{" "}
          <strong>traditional and decentralized finance</strong> (where compliance allows). This network enables
          institutions to{" "}
          <strong>expand into new markets, optimize cross-border payment flows, and enhance financial services</strong>{" "}
          while ensuring adherence to regulatory requirements.
        </span>
      )
    },
    {
      icon: <SvcOpenBanking />,
      title: "Open banking infrastructure",
      desc: (
        <span>
          {" "}
          SolideFinance’s technology enables financial institutions to seamlessly deploy{" "}
          <strong>cost-efficient and scalable core banking infrastructure</strong>, supporting both{" "}
          <strong>local and international currencies</strong>. Neo Banks can leverage our infrastructure and
          certifications to enhance their{" "}
          <strong>banking services, optimize operational efficiency, and expand their financial offerings</strong> with
          a robust and compliant foundation.{" "}
        </span>
      )
    },
    {
      icon: <SvcInterbank />,
      title: "Next-Generation Interbank Payment Network",
      desc: (
        <span>
          {" "}
          SolideNetwork offers a cost-effective, efficient, and secure worldwide interbank network for cross-border
          transactions. By leveraging{" "}
          <strong>blockchain technology and a global network of correspondent banking partners</strong>, SolideNetwork
          enables <strong>faster settlements, reduced transaction costs, and enhanced transparency</strong>. Designed to
          meet <strong>institutional compliance standards</strong>, our solution streamlines international payments
          while enabling financial institutions to optimize their international payment operations with{" "}
          <strong>greater efficiency and reliability</strong>.{" "}
        </span>
      )
    }
  ];

  const tab4Services = [
    {
      icon: <SvcMonetize />,
      title: "Monetizing payments for fintech & software providers",
      desc: (
        <span>
          {" "}
          Fintech and software providers can enhance their offerings by integrating{" "}
          <strong>efficient, revenue-generating payment services</strong>. SolideFinance’s{" "}
          <strong>banking-as-a-service infrastructure</strong> (without being a credit institution) enables seamless{" "}
          <strong>embedding of payment capabilities</strong>, optimizing payroll, treasury, and cross-border
          transactions while ensuring compliance, cost savings, and operational efficiency.{" "}
        </span>
      )
    },
    {
      icon: <SvcPaymentsInfra />,
      title: "Payments infrastructure",
      desc: (
        <span>
          SolideFinance provides banks with an{" "}
          <strong>
            intermediary-free EUR/USD payment infrastructure, delivering faster transactions, reduced costs, and
            real-time (T+0) settlement.
          </strong>{" "}
          By optimizing FX processes, financial institutions can enhance profitability, competitiveness, and transaction
          transparency, ensuring compliance while staying ahead in the evolving financial landscape.
        </span>
      )
    },
    {
      icon: <SvcNetwork />,
      title: "A worldwide network of correspondent banking",
      desc: (
        <span>
          {" "}
          With <strong>SolideNetwork</strong>, banks gain access to a{" "}
          <strong>global correspondent banking network</strong> spanning both{" "}
          <strong>traditional and decentralized finance</strong> (where compliance allows). This network enables
          institutions to{" "}
          <strong>expand into new markets, optimize cross-border payment flows, and enhance financial services</strong>{" "}
          while ensuring adherence to regulatory requirements.
        </span>
      )
    },
    {
      icon: <SvcOpenBanking />,
      title: "Open banking infrastructure",
      desc: (
        <span>
          {" "}
          SolideFinance’s technology enables financial institutions to seamlessly deploy{" "}
          <strong>cost-efficient and scalable core banking infrastructure</strong>, supporting both{" "}
          <strong>local and international currencies</strong>. Neo Banks can leverage our infrastructure and
          certifications to enhance their{" "}
          <strong>banking services, optimize operational efficiency, and expand their financial offerings</strong> with
          a robust and compliant foundation.{" "}
        </span>
      )
    }
  ];
  const tab5Services = [
    {
      icon: <SvcOnOffRamp />,
      title: "Automatic crypto on- and off-ramp via API",
      desc: (
        <span>
          {" "}
          Management firms benefit from automated{" "}
          <strong>crypto on- and off-ramping at a competitive fee through our API</strong>, ensuring efficient
          conversion of digital assets into fiat currencies all around the world, while maintaining compliance and
          operational efficiency.
        </span>
      )
    },
    {
      icon: <SvcStablecoins />,
      title: "Access to Stablecoins and Cryptocurrencies",
      desc: (
        <span>
          {" "}
          SolideFinance provides <strong>on- and off-ramp solutions for new stablecoins and cryptocurrencies</strong>,
          allowing institutions to access a broader range of digital assets with institutional-grade infrastructure.
        </span>
      )
    },
    {
      icon: <SvcNetwork />,
      title: "A worldwide network of correspondent banking",
      desc: (
        <span>
          {" "}
          With <strong>SolideNetwork</strong>, banks gain access to a{" "}
          <strong>global correspondent banking network</strong> spanning both{" "}
          <strong>traditional and decentralized finance</strong> (where compliance allows). This network enables
          institutions to{" "}
          <strong>expand into new markets, optimize cross-border payment flows, and enhance financial services</strong>{" "}
          while ensuring adherence to regulatory requirements.
        </span>
      )
    }
  ];
  const tab6Services = [
    {
      icon: <SvcOnOffRamp />,
      title: "Automatic crypto on- and off-ramp via API",
      desc: (
        <span>
          {" "}
          Management firms benefit from automated{" "}
          <strong>crypto on- and off-ramping at a competitive fee through our API</strong>, ensuring efficient
          conversion of digital assets into fiat currencies all around the world, while maintaining compliance and
          operational efficiency.
        </span>
      )
    },
    {
      icon: <SvcStablecoins />,
      title: "Access to Stablecoins and Cryptocurrencies",
      desc: (
        <span>
          {" "}
          SolideFinance provides <strong>on- and off-ramp solutions for new stablecoins and cryptocurrencies</strong>,
          allowing institutions to access a broader range of digital assets with institutional-grade infrastructure.
        </span>
      )
    },
    {
      icon: <SvcNetwork />,
      title: "A worldwide network of correspondent banking",
      desc: (
        <span>
          {" "}
          With <strong>SolideNetwork</strong>, banks gain access to a{" "}
          <strong>global correspondent banking network</strong> spanning both{" "}
          <strong>traditional and decentralized finance</strong> (where compliance allows). This network enables
          institutions to{" "}
          <strong>expand into new markets, optimize cross-border payment flows, and enhance financial services</strong>{" "}
          while ensuring adherence to regulatory requirements.
        </span>
      )
    }
  ];
  const tab7Services = [
    {
      icon: <SvcOnOffRamp />,
      title: "Automatic crypto on- and off-ramp via API",
      desc: (
        <span>
          {" "}
          Management firms benefit from automated{" "}
          <strong>crypto on- and off-ramping at a competitive fee through our API</strong>, ensuring efficient
          conversion of digital assets into fiat currencies all around the world, while maintaining compliance and
          operational efficiency.
        </span>
      )
    },
    {
      icon: <SvcStablecoins />,
      title: "Access to Stablecoins and Cryptocurrencies",
      desc: (
        <span>
          SolideFinance provides <strong>on- and off-ramp solutions for new stablecoins and cryptocurrencies</strong>,
          allowing institutions to access a broader range of digital assets with institutional-grade infrastructure.
        </span>
      )
    },
    {
      icon: <SvcStablecoins />,
      title: "Reduce intermediaries to offer crypto-to-fiat services",
      desc: (
        <span>
          {" "}
          SolideFinance offers financial institutions a <strong>cost-effective crypto-to-fiat infrastructure</strong>.
          By reducing intermediaries, our solution <strong>lowers costs, improves efficiency</strong>, and ensures{" "}
          <strong>regulatory compliance</strong> in crypto-fiat conversions.{" "}
        </span>
      )
    },
    {
      icon: <SvcOpenBanking />,
      title: "Open banking infrastructure",
      desc: (
        <span>
          {" "}
          SolideFinance’s technology enables financial institutions to seamlessly deploy{" "}
          <strong>cost-efficient and scalable core banking infrastructure</strong>, supporting both{" "}
          <strong>local and international currencies</strong>. Neo Banks can leverage our infrastructure and
          certifications to enhance their{" "}
          <strong>banking services, optimize operational efficiency, and expand their financial offerings</strong> with
          a robust and compliant foundation.{" "}
        </span>
      )
    },
    {
      icon: <SvcNetwork />,
      title: "A worldwide network of correspondent banking",
      desc: (
        <span>
          {" "}
          With <strong>SolideNetwork</strong>, banks gain access to a{" "}
          <strong>global correspondent banking network</strong> spanning both{" "}
          <strong>traditional and decentralized finance</strong> (where compliance allows). This network enables
          institutions to{" "}
          <strong>expand into new markets, optimize cross-border payment flows, and enhance financial services</strong>{" "}
          while ensuring adherence to regulatory requirements.
        </span>
      )
    }
  ];

  const generateTabContent = (services: typeof tab1Services) => (
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="carousel"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <span className="icon">{service.icon}</span>
          <h5>{service.title}</h5>
          <p>{service.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );

  const tabStyle = {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "22px",
    color: "#0A283C99"
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <span style={tabStyle}>Banks</span>,
      children: generateTabContent(tab1Services)
    },
    {
      key: "2",
      label: <span style={tabStyle}>Neo Banks</span>,
      children: generateTabContent(tab2Services)
    },
    {
      key: "3",
      label: <span style={tabStyle}>PSP</span>,
      children: generateTabContent(tab3Services)
    },
    {
      key: "4",
      label: <span style={tabStyle}>Softwares</span>,
      children: generateTabContent(tab4Services)
    }
  ];

  const items2: TabsProps["items"] = [
    {
      key: "5",
      label: <span style={tabStyle}>Digital Asset Wealth Wanagement Firms</span>,
      children: generateTabContent(tab5Services)
    },
    {
      key: "6",
      label: <span style={tabStyle}>Saving Tokenised Funds</span>,
      children: generateTabContent(tab6Services)
    },
    {
      key: "7",
      label: <span style={tabStyle}>Blockchain Native Companies</span>,
      children: generateTabContent(tab7Services)
    }
  ];

  return (
    <div className="services-component page alternate" id={nav}>
      <div className="section-divider-wrapper">
        <div className="section-divider">
          <div className="line" />
          <a href="https://www.f6s.com/company/solidefinance" target="_blank" rel="noopener noreferrer">
            <img
              src={F6SBadge}
              alt="SolideFinance ranked No8 on the 79 top FinTech companies and startups in France in March 2025"
            />
          </a>
          <div className="line" />
        </div>
      </div>

      <h3>Services</h3>

      <div className="head">
        <h4>We serve Traditional Finance</h4>
        <p>
          Our solution integrates directly with Core Banking Systems through a well-defined, developer-friendly REST
          API, ensuring secure, reliable, and efficient connectivity while maintaining compliance with institutional
          standards.
        </p>
        <p>
          <a href="https://demo.solide.fi" target="_blank" className="button-like light">
            Access demo{" "}
            <span>
              <NeArrow />
            </span>
          </a>
        </p>
      </div>

      {}
      <div className="custom-tabs-wrapper">
        <Tabs defaultActiveKey="1" items={items} onChange={handleTabChange} className="custom-tabs desktop-only" />
        <div className="mobile-only accordion-view">
          <Collapse accordion expandIconPosition="end">
            <Collapse.Panel header="Banks" key="1">
              <Carousel draggable>
                {tab1Services.map((service, index) => (
                  <div key={index}>
                    <div className="carousel-slide">
                      <span className="icon">{service.icon}</span>
                      <h5>{service.title}</h5>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Collapse.Panel>

            <Collapse.Panel header="Neo Banks" key="2">
              <Carousel draggable>
                {tab2Services.map((service, index) => (
                  <div key={index}>
                    <div className="carousel-slide">
                      <span className="icon">{service.icon}</span>
                      <h5>{service.title}</h5>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Collapse.Panel>

            <Collapse.Panel header="PSP" key="3">
              <Carousel draggable>
                {tab3Services.map((service, index) => (
                  <div key={index}>
                    <div className="carousel-slide">
                      <span className="icon">{service.icon}</span>
                      <h5>{service.title}</h5>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Collapse.Panel>

            <Collapse.Panel header="Softwares" key="4">
              <Carousel draggable>
                {tab4Services.map((service, index) => (
                  <div key={index}>
                    <div className="carousel-slide">
                      <span className="icon">{service.icon}</span>
                      <h5>{service.title}</h5>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Collapse.Panel>
          </Collapse>
        </div>
      </div>

      <div className="head">
        <h4>We serve Digital Asset Institutions</h4>
        <p>
          Digital asset wealth management firms, crypto funds, and blockchain-based financial institutions, we provide a
          secure, compliant, and efficient infrastructure for managing digital assets, leveraged by our REST API.
        </p>
        <p>
          <a href="https://demo.solide.fi" target="_blank" className="button-like light">
            Access demo{" "}
            <span>
              <NeArrow />
            </span>
          </a>
        </p>
      </div>

      {}
      <div className="custom-tabs2-wrapper">
        <Tabs defaultActiveKey="5" items={items2} onChange={handleTabChange} className="custom-tabs2 desktop-only" />
        <div className="mobile-only accordion-view">
          <Collapse accordion expandIconPosition="end">
            <Collapse.Panel header="Digital Asset Wealth Management Firms" key="5" forceRender>
              <Carousel draggable>
                {tab5Services.map((service, index) => (
                  <div key={index}>
                    <div className="carousel-slide">
                      <span className="icon">{service.icon}</span>
                      <h5>{service.title}</h5>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Collapse.Panel>

            <Collapse.Panel header="Saving Tokenised Funds" key="6" forceRender>
              <Carousel draggable>
                {tab6Services.map((service, index) => (
                  <div key={index}>
                    <div className="carousel-slide">
                      <span className="icon">{service.icon}</span>
                      <h5>{service.title}</h5>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Collapse.Panel>

            <Collapse.Panel header="Blockchain Native Companies" key="7" forceRender>
              <Carousel draggable>
                {tab7Services.map((service, index) => (
                  <div key={index}>
                    <div className="carousel-slide">
                      <span className="icon">{service.icon}</span>
                      <h5>{service.title}</h5>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Collapse.Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
}
