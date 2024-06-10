import cashpool from "../../assets/cashpool.webp";
import crossborderpayments from "../../assets/crossborderpayments.webp";

import "./ProductComponent.scss";

interface ProductComponentProps {
  nav: string;
}

export default function ProductComponent({ nav }: ProductComponentProps) {
  return (
    <>
      <div className="product-component page" id={nav}>
        <div>
          <h3>Product</h3>
          <h2>Cash pooling</h2>
          <p>
            Empower your business clients to maximize and optimize their intracompany cash management with SolideFinance
            Cash Pooling infrastructure.{" "}
          </p>
          <details>
            <summary>More about cash pooling</summary>

            <p>
              By centralizing cash management, they can streamline liquidity, minimize idle balances, and enhance
              interest earnings across multiple subsidiaries and locations. Our advanced technology provides real-time
              visibility and control over financial assets, ensuring global operations run smoothly and efficiently.
              Whether managing multiple currencies or navigating complex regulatory environments, our tailored cash
              pooling services offer the flexibility and precision needed to optimize foreign exchange costs.
            </p>
          </details>
        </div>
        <img src={cashpool} className="illustration" alt="cashpool"/>
      </div>
      <div className="product-component page">
        <img src={crossborderpayments} className="illustration" alt="cross-border payments"/>
        <div>
          <h3>Product</h3>
          <h2>Cross-border payments</h2>
          <p>
            Elevate your clients' financial operations with SolideFinance's advanced cross-border payment service. Our
            solution seamlessly integrates with your existing systems, enabling effortless international transactions.
          </p>
          <details>
            <summary>More about cross-border payments</summary>

            <p>
              Leveraging cutting-edge blockchain technology, we provide high liquidity, low transaction costs, stringent
              security, and full compliance with global regulations. By integrating our API, you can provide clients
              with instant, cost-effective transfers, positioning your service as a cutting-edge solution that will set
              the standard for the future. Tailored for businesses managing multiple currencies and international
              operations, our cross-border payment service ensures unparalleled efficiency, reliability, and speed,
              empowering your institution to excel in the global marketplace.
            </p>
          </details>
        </div>
      </div>
    </>
  );
}
