import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    pallete: { neutral },
  } = useTheme();

  const { category, price, name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="300px"
          height="400px"
          src={`ecommerce-react-iwkvknu9n-leonardoalves04.vercel.app${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="5%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            {/* Quantidade dos produtos*/}
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography variant={"body2"} color={shades.primary[300]}>
                {count}
              </Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>

            {/* Botão */}
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Adicionar ao carrinho
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="5px" borderRadius="20px">
        <Typography variant={"body2"} sx={{ mb: "10px" }}>
          {name}
        </Typography>
        <Typography variant={"body2"} fontWeight="bold">
          R${price}
        </Typography>
      </Box>
    </Box>
  );
};

export default Item;
