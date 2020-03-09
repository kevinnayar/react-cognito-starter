import * as React from 'react';
import PublicScreen from '../../screens/PublicScreen/PublicScreen';
import { Typography } from 'antd';

const { Text, Title } = Typography;

type TypeProps = {
  children?: any;
};

const TermsAndConditions = React.memo((props: TypeProps) => {
  return (
    <PublicScreen>
      <Title level={2}>
        Terms and Conditions for <strong>BrandName</strong>
      </Title>
      <Title level={3}>Introduction</Title>
      <Text>
        These Website Standard Terms and Conditions written on this webpage shall manage your use of our
        website, Webiste Name accessible at Website.com. These Terms will be applied fully and affect to your
        use of this Website. By using this Website, you agreed to accept all terms and conditions written in
        here. You must not use this Website if you disagree with any of these Website Standard Terms and
        Conditions.
      </Text>
      <Text>Minors or people below 18 years old are not allowed to use this Website.</Text>
      <Title level={3}>Intellectual Property Rights</Title>
      <Text>
        Other than the content you own, under these Terms, <strong>BrandName</strong> and/or its licensors own all
        the intellectual property rights and materials contained in this Website. You are granted limited
        license only for purposes of viewing the material contained on this Website.
      </Text>
      <Title level={3}>Restrictions</Title>
      <Text>
        You are specifically restricted from all of the following:
        <ul>
          <li>
            publishing any Website material in any other media; selling, sublicensing and/or otherwise
            commercializing any Website material;{' '}
          </li>
          <li>publicly performing and/or showing any Website material; </li>

          <li>using this Website in any way that is or may be damaging to this Website; </li>
          <li>using this Website in any way that impacts user access to this Website;</li>
          <li>
            using this Website contrary to applicable laws and regulations, or in any way may cause harm to
            the Website, or to any person or business entity;
          </li>
          <li>
            engaging in any data mining, data harvesting, data extracting or any other similar activity in
            relation to this Website;
          </li>
          <li>
            using this Website to engage in any advertising or marketing. Certain areas of this Website are
            restricted from being access by you and <strong>BrandName</strong> may further restrict access by you
            to any areas of this Website, at any time, in absolute discretion. Any user ID and password you
            may have for this Website are confidential and you must maintain confidentiality as well.
          </li>
        </ul>
      </Text>
      <Title level={3}>Your Content</Title>
      <Text>
        In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text,
        images or other material you choose to display on this Website. By displaying Your Content, you grant
        <strong> BrandName</strong> a non-exclusive, worldwide irrevocable, sub licensable license to use,
        reproduce, adapt, publish, translate and distribute it in any and all media. Your Content must be your
        own and must not be invading any third-party's rights. <strong>BrandName</strong> reserves the right to
        remove any of Your Content from this Website at any time without notice.
      </Text>
      <Title level={3}>No warranties</Title>
      <Text>
        This Website is provided “as is,” with all faults, and <strong>BrandName</strong> express no
        representations or warranties, of any kind related to this Website or the materials contained on this
        Website. Also, nothing contained on this Website shall be interpreted as advising you.
      </Text>
      <Title level={3}>Limitation of liability</Title>
      <Text>
        In no event shall <strong>BrandName</strong>, nor any of its officers, directors and employees, shall be
        held liable for anything arising out of or in any way connected with your use of this Website whether
        such liability is under contract. <strong>BrandName</strong>, including its officers, directors and
        employees shall not be held liable for any indirect, consequential or special liability arising out of
        or in any way related to your use of this Website.
      </Text>
      <Title level={3}>Indemnification</Title>
      <Text>
        You hereby indemnify to the fullest extent <strong>BrandName</strong> from and against any and/or all
        liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your
        breach of any of the provisions of these Terms.
      </Text>
      <Title level={3}>Severability</Title>
      <Text>
        If any provision of these Terms is found to be invalid under any applicable law, such provisions shall
        be deleted without affecting the remaining provisions herein.
      </Text>
      <Title level={3}>Variation of Terms</Title>
      <Text>
        <strong>BrandName</strong> is permitted to revise these Terms at any time as it sees fit, and by using
        this Website you are expected to review these Terms on a regular basis.
      </Text>
      <Title level={3}>Assignment</Title>
      <Text>
        <strong>BrandName</strong> is allowed to assign, transfer, and subcontract its rights and/or obligations
        under these Terms without any notification. However, you are not allowed to assign, transfer, or
        subcontract any of your rights and/or obligations under these Terms.
      </Text>
      <Title level={3}>Entire Agreement</Title>
      <Text>
        These Terms constitute the entire agreement between <strong>BrandName</strong> and you in relation to your
        use of this Website, and supersede all prior agreements and understandings.
      </Text>
      <Title level={3}>Governing Law &amp; Jurisdiction</Title>
      <Text>
        These Terms will be governed by and interpreted in accordance with the laws of the United States of
        America, and you submit to the non-exclusive jurisdiction of the state and federal courts located in
        US for the resolution of any disputes.
      </Text>
    </PublicScreen>
  );
});

export default TermsAndConditions;