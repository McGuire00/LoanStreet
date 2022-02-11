import requests

# home page
# http://localhost:3000/


def get_home_page(link):
    """performs a GET request to the / endpoint """
    # returns message: "Welcome"
    get = requests.get(link)
    print(get.text)

# get_info("http://localhost:3000/")


def get_all_loans(link):
    """ performs a GET request to the /api/loans endpoint """
    get = requests.get(link)
    print(get.json())


def get_loan_by_id(link):
    """performs a GET request to the /api/loans/:{insert loanId here} endpoint """
    get = requests.get(link)
    print(get.text)


def update_loan_by_id(link, data):
    """performs a PUT request to the /api/loans/:{insert loanId here} endpoint """
    put = requests.put(link, json=data)
    print(put.text)


def delete_loan_by_id(link):
    """performs a DELETE request to the /api/loans/:{insert loanId here} endpoint """
    delete = requests.delete(link)
    print(delete.text)


def submit_new_loan(link, data):
    """performs a POST request to the / endpoint """
    post = requests.post(link, json=data)
    print(post.text)

