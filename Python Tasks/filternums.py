
#[234,123,566]


def mapping(x):
    string=""
    for i in x:
        if i.isdigit():
            string+=i
    return string
def main():
    product_id = ['HEM-234','HEM-123','HEM-566']
    print(list(map(mapping,product_id)))

if __name__ == "__main__":
    main()