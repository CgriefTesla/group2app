## This function used for calculate the direct distance between users' position and GS_position

def dire_dis(current_position, position_GS):
    dis_dic = {}
    for key,value in position_GS.items():
        temp = (value[0]-current_position[0]) + (value[1]-current_position[1])
        dis_dic[key] = temp

    return dis_dic

## This function used for sort the distance list and return the top n GS name.
def dire_dis_rank(current_position, position_GS, num_show):
    dis_dic = dire_dis(current_position, position_GS)
    ranked_dic = sorted(dis_dic, key=lambda k: dis_dic[k])

    ranked_n = []
    for i in range(num_show):
        ranked_n.append(ranked_dic[i])

    return ranked_n
