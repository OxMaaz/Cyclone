import { MdPrivacyTip, MdHandshake, MdNewReleases } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import FeatureBlock from "../components/FeatureBlock";

type Props = {};

const Features = (props: Props) => {
  return (
    <div className="sm:px-20 px-12 p-4 flex flex-col py-24 space-y-10 justify-center items-center">
      <h1 className="montserrat-subheading font-extrabold py-4 text-4xl  text-[#FFDE59] ">
        Features and Capabilities
      </h1>{" "}
      <div
        className="md:grid flex flex-col grid-rows-3 md:grid-rows-2
             sm:grid-flow-col gap-4 "
      >
        <FeatureBlock
          heading="Enhanced Privacy Protection"
          subheading="Cyclone is deeply committed to prioritizing privacy. Through the use of stealth addresses, Cyclone ensures that only the intended recipient can trace transactions or monitor financial activities. These secure stealth addresses act as a powerful shield, making it extremely challenging for unauthorized individuals to gain any insight.

          ."
        >
          <MdPrivacyTip color="#FFDE59" className="text-[60px]" />
        </FeatureBlock>
        <FeatureBlock
          heading="User-Friendly Interface"
          subheading="Cyclone empowers secure and confidential fund reception through its cutting-edge system. By employing stealth or secret addresses, users can receive amounts without exposing their identities or sensitive financial details. The sender creates a corresponding stealth address upon request using the recipient's unique Cyclone key, ensuring secure and private fund transfers.

          ."
        >
          <MdHandshake color="#FFDE59" className="text-[60px] " />
        </FeatureBlock>
        <FeatureBlock
          heading="Secure Fund Transfer"
          subheading="Cyclone facilitates secure and confidential fund receptions through its advanced system. By employing stealth addresses, recipients can securely receive amounts without disclosing personal identities or sensitive financial information. The sender generates stealth address upon request using the recipient's unique Cyclone key, guaranteeing secure and private fund transfers.

          "
        >
          <AiOutlineTransaction color="#FFDE59" className="text-[60px]" />
        </FeatureBlock>
        <FeatureBlock
          heading="Unique Address Generation"
          subheading="Cyclone transforms address generation for transactions, prioritizing unmatched privacy and security. Using its innovative one-time public key mechanism, each transaction yields a new, distinct address. This eliminates risks linked to address reuse and vastly reduces tracing or information leaks. Through this advanced technique, Cyclone offers users a foolproof means to protect their financial information

          ."
        >
          <MdNewReleases color="#FFDE59" className="text-[60px]" />
        </FeatureBlock>
      </div>
    </div>
  );
};

export default Features;