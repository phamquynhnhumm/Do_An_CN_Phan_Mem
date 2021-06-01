import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useRouter } from "next/router";
import { Grid, GridItem } from "@chakra-ui/react";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}

function UI({ sach }) {


  const router = useRouter();

  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "#F687B3")}
        maxW="250px"
        borderColor ="white"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        _hover={{
          borderColor : "#22543D",
          borderWidth: "1px",
        }}
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="#22543D"
          />
        )}
        <Link 
              onClick={(e) => {
                router.push({
                  pathname: '/chi-tiet-sach/[id]',
                  query: { 
                    id: sach.id, 
                    tenSach: sach.tenSach, 
                    tenTacGia: sach.tenTacGia,
                    tenNhaXuatBan: sach.tenNhaXuatBan,
                    gia: sach.gia,
                    soTrang: sach.soTrang,
                    ngayXuatBan: sach.ngayXuatBan,
                    soLuong: sach.soLuong,
                    IMG1: sach?.IMG[0]?.anh?.publicUrl,
                    IMG2: sach?.IMG[1]?.anh?.publicUrl,
                    IMG3: sach?.IMG[2]?.anh?.publicUrl,
                    IMG4: sach?.IMG[3]?.anh?.publicUrl,
                    IMG5: sach?.IMG[4]?.anh?.publicUrl,
                    tieude: sach?.baiViet[0]?.tieude,
                    baiViet: sach?.baiViet[0]?.baiViet,
                    loai: sach?.phanLoaiSach?.loai,
                  },
                })
              }}
            >
        <Image
          w={'100%'}
          h={'100%'}
          src={sach?.IMG[0]?.anh?.publicUrl}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />
      </Link>

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge 
            rounded="full" 
            px="2" 
            text-overflow="ellipsis"
            fontSize="xx-small" 
            colorScheme="green">
              {sach.tenTacGia}
            </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Link 
              onClick={(e) => {
                router.push({
                  pathname: '/chi-tiet-sach/[id]',
                  query: { 
                    id: sach.id, 
                    tenSach: sach.tenSach, 
                    tenTacGia: sach.tenTacGia,
                    tenNhaXuatBan: sach.tenNhaXuatBan,
                    gia: sach.gia,
                    soTrang: sach.soTrang,
                    ngayXuatBan: sach.ngayXuatBan,
                    soLuong: sach.soLuong,
                    IMG1: sach?.IMG[0]?.anh?.publicUrl,
                    IMG2: sach?.IMG[1]?.anh?.publicUrl,
                    IMG3: sach?.IMG[2]?.anh?.publicUrl,
                    IMG4: sach?.IMG[3]?.anh?.publicUrl,
                    IMG5: sach?.IMG[4]?.anh?.publicUrl,
                    tieude: sach?.baiViet[0]?.tieude,
                    baiViet: sach?.baiViet[0]?.baiViet,
                    loai: sach?.phanLoaiSach?.loai,
                  },
                })
              }}
            >
              <Box
                fontSize="small"
                fontWeight="semibold"
                text-overflow="ellipsis"
                w="150px"
                as="h4"
                lineHeight="tight"
                isTruncated               
              >
                {sach.tenSach}
              </Box>
            </Link>
            <Link           
             onClick={(e) => {
                // <ChiTietDonHangCreate sach = {sach} UI={...}/>
              }}
            >
              <Tooltip
                label="Thêm vào giỏ"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
              >
              <chakra.a href={"#"} display={"flex"}>
                <Icon
                  as={FiShoppingCart}
                  h={7}
                  w={7}
                  color={"#22543D"}
                  alignSelf={"center"}
                />
              </chakra.a>
            </Tooltip>
            </Link>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box as="span" ml="2" color="#ECC94B">
              <Rating rating={data.rating} />
            </Box>
            <Box fontSize="2xl" color={useColorModeValue("#22543D", "white")}>
              <Box as="span" color={"#22543D"} fontSize="lg">
                ₫
              </Box>
              {new Intl.NumberFormat().format(sach.gia)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default UI;