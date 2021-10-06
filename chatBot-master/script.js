function analyse(str) {
	// Function objectives
	// 1. Lower casing
	// 2. Removal of punctuations
	// 3. Removal of stopwords
	// 4. Removal of frequent words
	// 5. Removal of rare words
	// 6. Stemming
	// 7. Lemmatizing
	// 8. Removal of emojis
	// 9. Removal of emoticons
	// 10. Conversion of emoticons into words
	// 11. Conversion of emojis into words
	// 12. Removal of URLs
	// 13. Removal of HTML tags
	// 14. Chat words conversion
	// 15. Spelling correction

	// 1
	str = str.toLowerCase();

	// 2
	let punc = "!#$%&'()*+,-./:;<=>?@[]^_{|}~`"
	for (let i = 0; i < str.length; i++) {
		if (punc.includes(str[i]) || str[i] == '\\') {
			str = str.slice(0, i) + str.slice(i + 1, str.length - 1)
		}
	}

	//3
	let stopwords = ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "you're", "the",
	"you've", "you'll", "you'd", "your", "yours", "yourself", "yourselves", "he", "him", "his", 
	"himself", "she", "she's", "her", "hers", "herself", "it", "it's", "its", "itself", "they", "them", 
	"their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "that'll", "these", 
	"those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", 
	"did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", 
	"for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", 
	"below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", 
	"once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", 
	"other", "some", "such", "nor", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", 
	"will", "just", "don", "don't", "should", "should've", "now", "d", "ll", "m", "o", "re", "ve", "y", "ain", "aren", 
	"aren't", "couldn", "couldn't", "didn", "didn't", "doesn", "doesn't", "hadn", "hadn't", "hasn", "hasn't", 
	"haven", "haven't", "isn", "isn't", "ma", "mightn", "mightn't", "mustn", "mustn't", "needn", "needn't", 
	"shan", "shan't", "shouldn", "shouldn't", "wasn", "wasn't", "weren", "weren't", "won", "won't", "wouldn", "wouldn't", ""]

	let res = str.split(" ");
	for (let i = 0; i < res.length; i++) {
		for (let j = 0; j < stopwords.length; j++) {
			if (res[i] == stopwords[j]) {
				res.splice(i, 1)
			}
		}
	}
	str = res.join(' ');

	// Output
	return str;
}