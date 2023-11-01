import multiprocessing
def process_number(number):
	result = number * 2
	return "Process {}: {} * 2 = {}".format(multiprocessing.current_process().pid, number, result)

def main():
	numbers = range(1, 101)
	num_processes = 10

	with multiprocessing.Pool(processes=num_processes) as pool:
		results = pool.map(process_number, numbers)

	for result in results:
		print(result)

if __name__ == "__main__":
	main()