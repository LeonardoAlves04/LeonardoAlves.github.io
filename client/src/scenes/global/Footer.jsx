import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor="#F2F2F2">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px,30px,40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            ECOMMER
          </Typography>
          <span>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </span>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Sobre nós
          </Typography>
          <Typography mb="30px">Carreira</Typography>
          <Typography mb="30px">Nossas Lojas</Typography>
          <Typography mb="30px">Termos</Typography>
          <Typography mb="30px">Politica de Privacidade</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Atendimento ao Consumidor
          </Typography>
          <Typography mb="30px">Central de Atendimento</Typography>
          <Typography mb="30px">Rastreie seu pedido</Typography>
          <Typography mb="30px">Compras em atacado</Typography>
          <Typography mb="30px">Reembolsos</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contate-nos
          </Typography>
          <Typography mb="30px">
            Empresa XXXXXXXX, Rua dos Bobos, número 0
          </Typography>
          <Typography mb="30px">Email: emaildaempresa123@gmail.com</Typography>
          <Typography mb="30px">(55) 9999-9999</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
