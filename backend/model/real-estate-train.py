from sklearn import tree
from sklearn import preprocessing
from joblib import dump
import pathlib

#Open the file and store the contents in the body variable
file = open(pathlib.Path('data/real-estate-data.csv'), 'r')
body = file.readlines()

#initialize the header and data_set list variables for storage
header = []
data_set = []

#split lines from the body of the data and store it in the data_set variable
for line in body:
    columns = line.split(',')
    if '\n' in columns:
        columns.remove('\n')
    data_set.append(columns)

#seperate the header from the data
header = data_set[0]
data_set.remove(data_set[0])

#price, ppsf, total sq. ft., days to sell, zip code, bedrooms, bathrooms, half bathrooms, year built, garage,
#split the data_set list into features and labels lists
feature_columns = [[], [], [], [], [], [], [], [], []]
feature_set = []
label_columns = []
label_set = []
#take each column and split it into the feature_set and label_set lists
for x in data_set:
    feature_columns[0].append(x[1])
    feature_columns[1].append(x[2])
    feature_columns[2].append(x[3])
    feature_columns[3].append(x[4])
    feature_columns[4].append(x[5])
    feature_columns[5].append(x[6])
    feature_columns[6].append(x[7])
    feature_columns[7].append(x[8])
    feature_columns[8].append(x[9])
    label_columns.append(x[0].strip())

#cast integer columns to int without encoding for features and labels
feature_columns[0] = [eval(x) for x in feature_columns[0]]
feature_columns[1] = [eval(x) for x in feature_columns[1]]
feature_columns[2] = [eval(x) for x in feature_columns[2]]
feature_columns[3] = [eval(x) for x in feature_columns[3]]
feature_columns[4] = [eval(x) for x in feature_columns[4]]
feature_columns[5] = [eval(x) for x in feature_columns[5]]
feature_columns[6] = [eval(x) for x in feature_columns[6]]
feature_columns[7] = [eval(x) for x in feature_columns[7]]
label_columns = [eval(x) for x in label_columns]

#encoder declaration for preprocessing
encoder = preprocessing.LabelEncoder()
encoded_garage = encoder.fit_transform(feature_columns[8])

#normalize the encoding into a list and reinsert it into their respective lists
temporary_list = []

for x in encoded_garage: 
    temporary_list.append(x)
feature_columns[8] = temporary_list

for x in range(0, len(feature_columns[0])):
    feature_set.append([feature_columns[0][x], feature_columns[1][x], feature_columns[2][x], 
                        feature_columns[3][x], feature_columns[4][x], feature_columns[5][x],
                        feature_columns[6][x], feature_columns[7][x], feature_columns[8][x]])
for x in range(0, len(label_columns)):
    label_set.append(label_columns[x])

#declare the learning model and fit to the model
decision_tree = tree.DecisionTreeClassifier()
decision_tree = decision_tree.fit(feature_set, label_set)

dump(decision_tree, pathlib.Path('model/real-estate-v1.joblib'))