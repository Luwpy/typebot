import { client } from "../..";
import { Event } from "../../structs/types/Event";

export default new Event({
  name: "ready",
  once: true,
  run() {
    const { commands, buttons, selects, modals } = client;

    console.log("✔ Bot online".green);
    console.log(
      `Foram carregados:\n ${buttons} botões \n ${modals} modais \n ${selects}`
        .cyan
    );
  },
});
