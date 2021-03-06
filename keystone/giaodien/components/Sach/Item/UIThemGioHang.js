import {
  Grid,
  GridItem,
  Box,
  Text,
  HStack,
  Button,
  Input,
  Divider,
  Icon,
  Stack,
  useNumberInput,
  useToast,
  Center,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useQuery, gql, useMutation } from "@apollo/client";
import ChiTietDonHangCreate from "../../ChiTietDonHang/Create";

export default function UIThemGioHang({ sach }) {
  const [value, setValue] = useState("1");

  const router = useRouter();

  // Thay đôi so luong mua hang
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 0,
    max: sach.soLuong,
  });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });
  return (
    <GridItem rowSpan={5} colSpan={5} bg="white">
      <GridItem rowSpan={3} colSpan={5} bg="white">
        <GridItem rowSpan={2} colSpan={5} bg="white">
          <Grid
            h="200px"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={1} bg="white">
              <Box ml={14}>
                <p>
                  <p>
                    <b name="gia">Giá:</b>{" "}
                    <Text fontSize="xl" ml={30} color={"green.600"}>
                      {" "}
                      {new Intl.NumberFormat().format(sach.gia)}₫
                    </Text>{" "}
                  </p>
                  <br />
                  <p>
                    <b>Số lượng có trong kho: </b> {!(parseInt(input.value) === sach.soLuong) ? sach.soLuong : <Text color={"red.600"}>Số lượng trong kho không đủ!</Text>}
                  </p>
                </p>
                <br />
                <b>Số lượng</b>
                <br />
                <br />
                <HStack maxW="180px">
                  <Button
                    {...inc}
                    onClick={(e) => {
                      setValue(input);
                    }}
                  >
                    +
                  </Button>
                  <Input textAlign="center" {...input} name="soLuong" />
                  <Button
                    {...dec}
                    onClick={(e) => {
                      setValue(input);
                    }}
                  >
                    -
                  </Button>
                </HStack>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} bg="white">
              <Stack direction="row" h="200px">
                <Divider orientation="vertical" ml={10} />
                <Text>
                  {" "}
                  <b>Dịch vụ của chúng tôi</b>
                  <br />
                  <br />
                  <p> - Giao hàng tận nhà trong 3 - 7 ngày làm việc. </p>
                  <br />
                  <p> - Miễn phí giao hàng Toàn Quốc cho đơn hàng trên 300k.</p>
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} bg="white">
          <br />
          <Box ml={14}>
            <ChiTietDonHangCreate
              sachId={sach.id}
              soLuong={parseInt(input.value)}
              check={false}
            />
          </Box>
        </GridItem>
      </GridItem>

    </GridItem>
  );
}
