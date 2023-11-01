import threading
import concurrent.futures

def process_number(number):
    result = number * 2
    return "Thread {}: {} * 2 = {}".format(threading.get_ident(), number, result)

def main():
    numbers = range(1, 101)
    num_threads = 10

    with concurrent.futures.ThreadPoolExecutor(max_workers=num_threads) as executor:
        futures = [executor.submit(process_number, number) for number in numbers]

        for future in concurrent.futures.as_completed(futures):
            result = future.result()
            print(result)

if __name__ == "__main__":
	main()