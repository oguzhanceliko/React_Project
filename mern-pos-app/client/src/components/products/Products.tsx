import { FC, useEffect, useState } from "react";
import { IProduct } from "../../interfaces/product";
import ProductItem from "./ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import AddModal from "./AddModal";
import { ICategory } from "../../interfaces/category";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setProducts } from "../../redux/productSlice";
type Props = {
  categories: ICategory[];
};
const Products: FC<Props> = ({ categories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        dispatch(setProducts(data)); // Redux store'a ürünleri set et
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [dispatch]);

  const filteredProducts = useSelector((state: RootState) => {
    const filterCategory = state.products.filteredProduct; // Değişiklik: filteredProduct kullanılmalı
    if (filterCategory === "Tümü" || !filterCategory) {
      return state.products.products; // Değişiklik: Tümü seçiliyse veya filtre yoksa tüm ürünleri döndür
    } else {
      return state.products.products.filter(
        (product) => product.category === filterCategory
      );
    }
  });

  return (
    <div className="product-wrapper grid gap-4 grid-cols-card">
      {filteredProducts.map((item) => (
        <ProductItem item={item} key={item._id} />
      ))}
      <div
        className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-purple-800 flex justify-center items-center hover:opacity-90 min-h-[180px]"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="text-white md:text-2xl" />
      </div>
      <div
        className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-orange-800 flex justify-center items-center hover:opacity-90 min-h-[180px]"
        onClick={() => navigate("/products")}
      >
        <EditOutlined className="text-white md:text-2xl" />
      </div>
      <AddModal
        categories={categories}
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        products={filteredProducts}
        setProducts={setProducts}
      />
    </div>
  );
};

export default Products;
