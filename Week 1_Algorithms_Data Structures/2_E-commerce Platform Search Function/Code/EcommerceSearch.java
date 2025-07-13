

import java.util.*;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return "Product(" + productId + ", '" + productName + "', '" + category + "')";
    }
}

public class EcommerceSearch {

    public static Product linearSearch(List<Product> products, String searchTerm) {
        for (Product product : products) {
            if (product.productName.equals(searchTerm)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(List<Product> sortedProducts, String searchTerm) {
        int left = 0, right = sortedProducts.size() - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            Product midProduct = sortedProducts.get(mid);
            int compare = midProduct.productName.compareTo(searchTerm);

            if (compare == 0) {
                return midProduct;
            } else if (compare < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }


    public static Map<String, Product> buildNameIndex(List<Product> products) {
        Map<String, Product> index = new HashMap<>();
        for (Product product : products) {
            index.put(product.productName, product);
        }
        return index;
    }

    public static void main(String[] args) {
        List<Product> products = new ArrayList<>();
        products.add(new Product(101, "iPhone 14", "Electronics"));
        products.add(new Product(102, "MacBook Pro", "Electronics"));
        products.add(new Product(103, "Galaxy S22", "Electronics"));
        products.add(new Product(104, "Pixel 7", "Electronics"));

        System.out.println("\nLinear Search:");
        Product result1 = linearSearch(products, "MacBook Pro");
        System.out.println(result1);

        System.out.println("\nBinary Search:");

        products.sort(Comparator.comparing(p -> p.productName));
        Product result2 = binarySearch(products, "MacBook Pro");
        System.out.println(result2);

        System.out.println("\nHashMap Search:");
        Map<String, Product> nameIndex = buildNameIndex(products);
        Product result3 = nameIndex.get("MacBook Pro");
        System.out.println(result3);
    }
}
