import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const ProductCheckout = () => {
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState('');
  const productPrice = 141800;
  const totalPrice = productPrice * quantity;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <View style={styles.container}>
      {/* Thông tin sản phẩm */}
      <View style={styles.productSection}>
        <Image source={require('./image.png')} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>NGUYÊN HÀM, TÍCH PHÂN VÀ ỨNG DỤNG</Text>
          <Text style={styles.productSupplier}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>{productPrice.toLocaleString()} đ</Text>
          <Text style={styles.productPrice1}> 141,000 đ</Text>
        </View>
      </View>

      {/* Phần tăng/giảm số lượng */}
      <View style={styles.quantitySection}>
        <TouchableOpacity onPress={handleDecrease} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={handleIncrease} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.laterBuy}>Mua sau</Text>
      </View>

      {/* Mã giảm giá */}
      <View style={styles.discountSection}>
        <Text style={styles.savedDiscountText}>Mã giảm giá đã lưu    <Text style={styles.laterBuy}>Xem tại đây </Text></Text>
        <View style={styles.discountRow}>
          <TextInput
            style={styles.discountInput}
            placeholder="Mã giảm giá"
            value={discountCode}
            onChangeText={setDiscountCode}
          />
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.productSupplier1}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox? 
        <Text style={styles.laterBuy}>nhập tại đây </Text></Text>
      </View>

      {/* Tạm tính */}
      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Tạm tính</Text>
        <Text style={styles.totalPrice}>{totalPrice.toLocaleString()} đ</Text>
      </View>

      {/* Thành tiền */}
      <View style={styles.finalTotalSection}>
        <Text style={styles.finalTotalText}>Thành tiền</Text>
        <Text style={styles.finalTotalPrice}>{totalPrice.toLocaleString()} đ</Text>
      </View>

      {/* Nút đặt hàng */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  productSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 140,
    resizeMode: 'contain',
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSupplier1: {
    fontSize: 14,
    color: '#000',
    fontWeight : 'bold',
    marginBottom: 50,
    marginTop: 20,
  },
  productPrice: {
    fontSize: 16,
    color: 'red',
    fontWeight:'bold',
  },
  productPrice1: {
    fontSize: 14,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 20,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  laterBuy: {
    marginLeft: 'auto',
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  discountSection: {
    marginBottom: 20,
  },
  savedDiscountText: {
    marginBottom: 5,
    fontSize: 14,
    color: '#888',
  },
  discountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
  },
  applyButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  applyButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 16,
    color: 'red',
  },
  finalTotalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 10,
  },
  finalTotalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  finalTotalPrice: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductCheckout;
