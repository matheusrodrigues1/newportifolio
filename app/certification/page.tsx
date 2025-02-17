import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { NextPage } from "next";

const Certification: NextPage = () => {
  return (
    <>
      <Accordion
        allowMultiple
        className="mt-[0.1rem] pl-5 pr-5 pt-3 pb-3 bg-[#C0C0C0] w-screen"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                className="font-bold text-[0.9rem]"
              >
                Certificados e Licenças
              </Box>
              <AccordionIcon className="text-[1.3rem]" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className="pl-3 mt-3">
            • <span className="font-bold">Pacote Office.</span> Excel -
            Intermediário
            <br />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Certification;
