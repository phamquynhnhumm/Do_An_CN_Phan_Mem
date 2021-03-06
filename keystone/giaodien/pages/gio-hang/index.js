import {
  Box,
  Flex,
  Text,
  Textarea,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  Container,
  SimpleGrid,
  Divider,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  Grid,
  GridItem,
  useNumberInput,
  Image,
  Input,
  Center,
  Portal,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import {
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import ThanhTieuDe from "../../components/ThanhTieuDe";
import ThanhTieuDeUI from "../../components/ThanhTieuDe/UI";
import ChanTrangUI from "../../components/ChanTrang/UI";
import { Fragment } from "react";
import GioHangItem from "../../components/GioHang/Item";
import GioHangItemUI from "../../components/GioHang/Item/UI";
import DonHangMuaHangUI from "../../components/DonHang/Create/UIMuaHang";

export default function GioHang() {
  // const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const { query: value } = router;

  return (
    <Fragment>
      <ThanhTieuDe UI={ThanhTieuDeUI} />
      <Box bg={"gray.500"}>
        <Box bg={"gray.50"} color={"black"}>
          <Container maxW={"container.xl"} bg="white" py={10}>
            <Heading size="lg" ml={14}>
              <i>Giỏ Hàng</i>
            </Heading>
            <br />
            <br />
            <hr></hr>
            <Box borderWidth={1} bg={"gray.50"}>
              <br></br>
              <Grid
                h="50px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(6, 1fr)"
                gap={4}
              >
                <GridItem rowSpan={1} colSpan={2}>
                  <Center mb={20}>
                    <b>Sản phẩm</b>
                  </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Center mb={20}>
                    <b>Đơn Giá</b>
                  </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Center>
                    <b>Số lượng </b>
                  </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Center>
                    <b>Số Tiền</b>
                  </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Center>
                    <b>Xóa</b>
                  </Center>
                </GridItem>
              </Grid>
            </Box>

            <GioHangItem UI={GioHangItemUI} check={true} />

            <br />
            <Center color="blue.300">
              <p> Miễn Phí Vận Chuyển cho đơn hàng từ ₫300.000 </p>
            </Center>
            <br />
            <br />
            <Grid h="50px" templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem colSpan={1}>
                <Center>
                  <Button
                    onClick={(e) => {
                      router.push("/");
                    }}
                    display={{ base: "none", md: "inline-flex" }}
                    fontWeight={50}
                    color={"red.300"}
                    bg={"white"}
                    href={"#"}
                    _hover={{
                      bg: "gray.600",
                    }}
                  >
                    Tiếp tục mua hàng
                  </Button>
                </Center>
              </GridItem>
              <GridItem colSpan={1}>

                <DonHangMuaHangUI value={value} />

              </GridItem>
            </Grid>
          </Container>
        </Box>
      </Box>
      <ChanTrangUI />
    </Fragment>
  );
}
