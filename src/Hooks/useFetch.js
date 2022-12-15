import { useEffect, useState } from "react"

const fetchImage = async (URL, options = {}) => {
	return fetch(
		URL,
		options
	);
};

// react hooks to get data in and api

const useFetch = (URL) => {

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true)
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState("")
	const [hasNextpage, setHasNextPage] = useState(false);


	useEffect(() => {
		const controller = new AbortController();

		(
			async function () {

				setLoading(true)

				try {

					const reponse = await fetchImage(URL, {})
					const DATA = await reponse.json()
					setHasNextPage(Boolean(DATA.length));

					if (DATA)
						setData(prev => [...prev, ...DATA])

					setError(false)

				} catch (err) {
					if (controller.signal.aborted) return
					setIsError(true)
					setError(err.message)
					setHasNextPage(false)
				} finally {
					setLoading(false)
				}
			}
		)()

		return () => {
			controller.abort()
		}
	}, [URL])

	return { data, error, isError, loading, hasNextpage }

}

export default useFetch