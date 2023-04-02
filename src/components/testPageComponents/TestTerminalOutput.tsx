import { Divider } from "@components/Divider";
import { TerminalOutput } from "@components/TerminalOutput";
import { Heading } from "@components/Typography/Heading";
import React from "react";

const output = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quia iusto harum reprehenderit sed, odit ut laudantium porro? Delectus, quas! Consequatur maiores eos, earum ex vitae at quasi tenetur amet!
Quaerat quos perferendis, repellendus, mollitia cumque recusandae corrupti ad saepe eos eum vero quo aspernatur laborum ab consequuntur aut cupiditate commodi eveniet facilis eligendi, blanditiis fugit nostrum. Qui, explicabo illum!
Quos, vero quod necessitatibus aspernatur delectus esse illum at ipsum, placeat quia maiores nemo inventore quaerat voluptates quasi veniam fuga accusantium suscipit dolorem labore error! Officia voluptatibus repudiandae perferendis praesentium!
Corporis nobis fugit distinctio aut voluptatem eius quos, quia ut laudantium laborum error illo modi consectetur dolore, perspiciatis culpa soluta natus tempore reprehenderit alias amet facere ipsum id inventore! Ullam!
Delectus aspernatur commodi laudantium accusantium, tempora amet? Molestiae quas maxime adipisci blanditiis incidunt ipsum sapiente aperiam illum iusto voluptatibus. Atque consequatur dicta itaque placeat dolores consequuntur, vero incidunt eveniet repellat.
Nisi veniam minima ullam nam, maxime voluptatem cupiditate officiis doloribus. A delectus culpa et fugiat? Quae, obcaecati iste incidunt perspiciatis minima qui, necessitatibus velit vero facilis totam aut quidem inventore?
Dolorem repudiandae facere illo commodi minus ut in impedit, delectus animi unde velit harum tempora error ducimus perferendis maxime sapiente, explicabo, totam tenetur qui cum! Iusto alias mollitia incidunt minima.
Accusantium harum veniam facilis quae, quas rerum, a aperiam molestias asperiores illum vitae repellat possimus deleniti vero, unde blanditiis fuga necessitatibus quibusdam esse dignissimos? Error velit consequuntur necessitatibus ducimus et!
Ab, explicabo. At ratione cum molestias corporis exercitationem quasi officiis maiores aperiam error, harum inventore similique iusto ea rerum praesentium dicta tenetur sed, fugiat explicabo quibusdam? Et molestiae sequi ratione.
Illum nemo quidem placeat, expedita voluptatum rerum omnis sunt quaerat, corrupti quasi itaque animi accusamus libero, dolores ipsum rem eius delectus veniam! Incidunt aliquid illo laborum neque, aspernatur dignissimos corrupti.
`;

type TestTerminalOutputProps = {};

export const TestTerminalOutput =
  ({}: TestTerminalOutputProps): React.ReactElement => {
    return (
      <>
        <Heading level={2}>Terminal Output</Heading>
        <Divider />
        <TerminalOutput>{output}</TerminalOutput>
      </>
    );
  };
