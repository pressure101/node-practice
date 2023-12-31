import { createServer } from 'http'

createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/plain'})
    response.end('Hello you beautiful soul.\n')
}).listen(8080)

function adventCode(input) {
    var inputLines = input.split('\n')
    var count = 0
    for (var line in inputLines) {
        var currentLineAsString = inputLines[line]
        count += determineNumber(currentLineAsString)
    }
    console.log(count)
}

function determineNumber(current) { 
    // replace all word values with numbers
    current = transformLine(current)
    // extract all the numbers out
    var arrayOfNumbers = current.match(/\d+/g)//.map(function (v){ return +v})
    // build number to return
    if (arrayOfNumbers == null) return 0
    switch(arrayOfNumbers.length) { // 
        case 0:
            return 0                                             
        case 1: // ['77777']
             return parseInt(arrayOfNumbers[0][0]+giveNumber(arrayOfNumbers[0]))
        case 2:
            return parseInt(arrayOfNumbers[0][0]+giveNumber(arrayOfNumbers[1])) // ['7777', '8888']
        default:
            var end = arrayOfNumbers.length - 1
            return parseInt(arrayOfNumbers[0][0]+giveNumber(arrayOfNumbers[end])) // ['7777', '8888', '9999']
    }
}

// return the last digit of the number passed
function giveNumber(stringOfNum) {
    if(stringOfNum.length === 1) return stringOfNum
    else {
        var end1 = stringOfNum.length - 1
        return stringOfNum[end1]
    } 
}

function transformLine(line) {
    var end = line.length
    var addLine = ''
    for (let i = 0 ;i < end; i++) {
        addLine += line[i]
        var control = addLine
        addLine = addLine.replaceAll('one', '1')
        addLine = addLine.replaceAll('two', '2')
        addLine = addLine.replaceAll('three', '3')
        addLine = addLine.replaceAll('four', '4')
        addLine = addLine.replaceAll('five', '5')
        addLine = addLine.replaceAll('six', '6')
        addLine = addLine.replaceAll('seven', '7')
        addLine = addLine.replaceAll('eight', '8')
        addLine = addLine.replaceAll('nine', '9')
        if(control != addLine && i !=0) {
            addLine = addLine+line[i]
        }
    }
    return addLine
}

var validStrings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

var input = '1abc2\n' +
'pqr3stu8vw\n' +
'a1b72c39d4e5\n' +
'trebuchet' 

var input3 = '1abc2\n' +
'pqr3stu8vw\n' +
'a1b72c39d4e5\n' +
'ttwoone9'

var input4 = 'two1nine\n' +
'eightwothree\n' +
'abcone2threexyz\n' +
'xtwone3four\n' +
'4nineightseven2\n' +
'zoneight234\n' +
'7pqrstsixteen\n'

var input2 = 'sixrrmlkptmc18zhvninek\n' +
'jcb82eightwond\n' +
'twofourthree778nineeight\n' +
'sqpxs1cgcrmctlgqvzxbcjzgr\n' +
'nqkjxbmbpkz9eight8\n' +
'one6fourfiveqndtrvgkkgthppnine\n' +
'zbrbdpbfcfxcqq5oneninejfgqpkfn\n' +
'hvlstzgvmjfivefourqjqtxdjmbxfour4four2\n' +
'13dzbmbtl6\n' +
'fourone2pmlxzzbmnfxg2\n' +
'3fourrbvvlrsrbb2858\n' +
'vlz4six89\n' +
'75threeb\n' +
'fourp783fiveseventhree\n' +
'2gxvcbsmn6\n' +
'896\n' +
'dnblxtxxpstlsix56\n' +
'4fivecl185\n' +
'onefk8sdljtfv37zsxsxrv7qvrpnmd\n' +
'fourdvhzp7foursix\n' +
'seventwonineseven27jbrqpxfx8\n' +
'1threenine241gnrdfqn5\n' +
'sixnrsqdgmkvs7sevenkgjgtglmdq9dkdzsdqmq2nptbxnxghm\n' +
'llbkdcpxkg1tnmnmrbskpdb\n' +
'zb7nvjz1eighttwo6nine\n' +
'5threeeightwor\n' +
'tgjmdbr4sixone5\n' +
'4twoseven7tjmklbl\n' +
'lt2vqgbkzjpcjzeight3frfzqgbhvlx4\n' +
'4sixseven3xbmsfxrrvv2st5\n' +
'gqlp7\n' +
'h137four\n' +
'3three7three7\n' +
'nine9sjlzcpjvhcnbhbthz4oneb8kfb\n' +
'jlrjz5two\n' +
'sixthreeeightsgnjnmffq3\n' +
'sixone87onepclf3\n' +
'two4six\n' +
'5dsnxrcfxb4\n' +
'fiveninesix4\n' +
'eight9jhqttcplxhtjthreevncsfnkpn\n' +
'4mgqksbchbcrxp5fivefourlzlzp\n' +
'xhzone6\n' +
'7nmcxjlmq94twofivethfccvn\n' +
'six769fourtwoseven\n' +
'two41stkvkhdgthree5\n' +
'jvpftbhljmcttkr5one\n' +
'9ldhzhplpzttwosevenblfxfdfour\n' +
'fivekcfmfmndbhtwofour32\n' +
'49qsslhxjqv1tsfqhkg\n' +
'five2zzstkq3935sevenpbb\n' +
'8sevencxvfbkv2p8\n' +
'lsmmnpnfourhjbfk67\n' +
'fourtwo4onethree\n' +
'1jf1eightdhvnclf2four7bmdvh\n' +
'tx4xczz1\n' +
'5qjlqp\n' +
'sevendmzqnjdnoneh1\n' +
'72seven7pvjxdlsix1\n' +
'four1eightvbbjh\n' +
'8451\n' +
'fivethreesdtmtr5four\n' +
'gqhtwone11ninethree4ptjsqlg4fivenine\n' +
'one7xctgtrtwoeightwovkv\n' +
'36eightsixeight4xnmhvzrnbb6four\n' +
'pjrtblbj759xpbr6\n' +
'hcbzmzqssh72eightthreesixgdmfivelmctqrz\n' +
'rhkctwo5twonine2\n' +
'cdptxn6sevenjktrlzlnlqxdtwoeight\n' +
'six36fnqmdcjgjgbqgqcgffivetskhjhkpdqfive\n' +
'qmpm111nine8\n' +
'73pcctxthreetwo4nine3fivetwonehfs\n' +
'nineeightnnfsixpt3kbbqfkhhn\n' +
'bvpmkrjmzkvdnbhdnine47\n' +
'26dmbqnt4oneseven5qvxfhl\n' +
'2sldrlqzone1pfdlsqdgpmnktdh3vtplbsvbx4\n' +
'238xrtqfcfgsrmrhkxz6\n' +
'5eighteight5sevenseven\n' +
'qtlnninesixxjnmxkntpf9six3pbrpljxhb2\n' +
'xrmkj137tkxktdnine5bnnhp\n' +
'gkqzprfcrfcgpxnvggsnccsrrk64oneseven\n' +
'zzmgmkvgrnknsq6tjgktmbghkl6\n' +
'xeightwoone91\n' +
'9j\n' +
'eightlm63\n' +
'fmctjfspmkblkvjtrcjdfhrtwo4fourdnkrzh\n' +
'3rb73\n' +
'8mkzqthreeqtvhc7\n' +
'qgmbchqqzsvx45eight\n' +
'oneknnlhjffrxhdzbgj1seven\n' +
'pv1fourtwo\n' +
'fxvgcx9vrlqssrrqvl94\n' +
'sn6\n' +
'57twoonefourthree\n' +
'gtwoeight6njfdpvcslcponenineqrxjsf\n' +
'8six1two6jkvltvgjfjsdn\n' +
'fourrxtjhcdxhr1fdqdj\n' +
'one2onefour\n' +
'three3four6pphqkx8vrgvbtmqckpz\n' +
'nine5nskhdvvbnineone\n' +
'7131eightone\n' +
'one1sgckzz\n' +
'sgpkknine6threehkqchz\n' +
'4twoqvbpxzpjj1njqtphjbr\n' +
'4pfcfnfqftbfnxds\n' +
'bmhthreecsslmgpzzddpxfthreefllkhdtrlj2\n' +
'9threeeightninefqdfptj\n' +
'ninenfbsevennkngdg21\n' +
'1fourthreeonethree3\n' +
'tjpjbmrsevenhcllbgdqxlctdk5\n' +
'2srjxhvbtqponefourtpsgthckseight6bjvnc\n' +
'68b\n' +
'vrcqnglljm19nftnzzjdzhvhzrgznine\n' +
'fivensjpfvltr2cvfhkcfsvt4pnmttrgrr8five\n' +
'tgzdbrgdfoursevenseven8fnxghs\n' +
'fourmhmql9rqkpvpgj7\n' +
'7mgk\n' +
'2z259nzfqfdhthreeftwo\n' +
'eight57lzhvpjcxpfivevkszhzbfourfour\n' +
'sixone984two\n' +
'threezdvkl15hk9eight\n' +
'4dxxpjttvsdtwofivenine\n' +
'99xbp8fivemcvonefivezlndv\n' +
'seven7six8fhxhxqgr3fsqqqmzdtj\n' +
'one579vdplvfghvf\n' +
'qzzthree1kghtwomnlnxpkmeight\n' +
'44eightonevnzxchddbnzrfpvxsix\n' +
'fivefive5zfsvhfpkzzfiveeight3mzrkkk4\n' +
'46xxzbffbmgeight9dcmtwo\n' +
'tvmgkxbrtdv6mzcpkf\n' +
'kvbczdkgzrxsxm3one557onevzdhzgn\n' +
'xrfxxzlmtlmvgpvninethree1\n' +
'4rnzxgfplmnmjppqv6txztmmcpnf\n' +
'five47fouroneqqrj\n' +
'nine5cxxfcqmeightjqztkdqxnpqthree\n' +
'2zlvnvptqkzsbvp9six4bfhp\n' +
'bhvkfxhdnrmkfjvsmkt6eighteighteightzzvpddg\n' +
'12seven49six\n' +
'5rstmpbrt5fiveone3one6\n' +
'24four\n' +
'fiveeight9foursix995\n' +
'8ktwonxzvt\n' +
'gf6six39zxvzcfbtbxkvqrps\n' +
'gqvpkvvgcxctwo7\n' +
'52mhhzfivebpn9\n' +
'5onethree\n' +
'one2cxzklfh9\n' +
'flrtmhfm985xmkpcdhr\n' +
'4ltqdsixfour7483\n' +
'one9nine26gjtzn9\n' +
'773xhnnch78\n' +
'one7sixsixgghp\n' +
'5292zljdfhjseven\n' +
'seven3onesixthreekz\n' +
'seven5seven3seven4zgtnnkkgseveneightwosg\n' +
'eight9vnfsvksv\n' +
'5seventwo9\n' +
'onesix7\n' +
'4one3two35nine\n' +
'5mmrdtrzctqxggtzhplfnphgp\n' +
'v94rpkdzeight6foursix\n' +
'four1mslzzghlpjtblzfour\n' +
'scrv2four4dxfqpcvnml\n' +
'8sxjs1141fivefive6\n' +
'3eightpqsxgklhkbkdsppone9\n' +
'fcvpsvmsevenfivesqsqvhm6hqmshds\n' +
'5sixfive677\n' +
'kgmpqfgjtk9hghczzhpsgfhsnghdxngd4\n' +
'2xzph98twonesj\n' +
'kphxn9\n' +
'sixeight625ssnpmlpsbtwo\n' +
'twofourhbdmm97\n' +
'ndseven1\n' +
'onelf51\n' +
'88khzmskgldcgttzqnzxdh4bnvxzgdr\n' +
'lchrtnsxtwo7749lbdgfour\n' +
'mmrktfqvvkzrglcpkfjrlm34\n' +
'5six7psdcckhs413threebqnr\n' +
'seven5oneqfourkf\n' +
'hsngkzgnfninegmjvtmtchdgs5grf\n' +
'8qxlscsevensix8\n' +
'bvbhc7dfplnk\n' +
'5jjcshzxhgzs1mpqm9\n' +
'vzqcvvtqjone7one\n' +
'one5threeseven\n' +
'hbtvthree1\n' +
'8five2lonecflvtjqh9eight\n' +
'xckhrnseven9six\n' +
'vggclcqcnfsix8seven924j\n' +
'jfjlzm1fivegplflrcvsix8\n' +
'zd6psbxlv\n' +
'mtcsbn2\n' +
'eightd29rlcd4\n' +
'six41one6csgdbndn\n' +
'four1mh2fourdfktmszp\n' +
'14nsnlqqlgfourxbzzxfztvbxsnxttjmktcxkkkzfphppsczqoneightgc\n' +
'9vlkdznbjt5zqthreetwonedv\n' +
'hqqtrzmknine1\n' +
'6eightsixdmkgnvkjqsqsdhlfzpxqpqdzrlvxm\n' +
'8four2xcztwo\n' +
'mptznhrtsq5fourfour4one\n' +
'8zxnrngjgtgq\n' +
'7s\n' +
'68zrdjfxfiveonerbrqbzxpnhsxkbsqsx5\n' +
'2eight4nine\n' +
'fiveeight6two\n' +
'12jvtjssix87\n' +
'qcxtdnzhtj665bqffftxdp\n' +
'gsxeightwo37v1\n' +
'fxbvtshpbldxfdnkk69jhvgktlthree6\n' +
'2hbxztgsmqsgg57\n' +
'five7sixfpjqdcbvxfgzcfgb\n' +
'soneightthree29qlsddxxfl5\n' +
'cn2\n' +
'29six\n' +
'skrbzfmsixp26twofournine\n' +
'two8onepcddklbzfoureight8\n' +
'nldvphs7dbqxsfflxx4\n' +
'8pngqfour\n' +
'ninefive69nineeighttwo6\n' +
'nine54lnzkckcvteight1bhznxgsixeightwor\n' +
'five18sevenvgktwo47\n' +
'1eightkcmhsb\n' +
'djcmqbvmfsztncvvthree5\n' +
'sixfbbhffjnrz1mtcfbqs76llrvjghtfive\n' +
'five5bkxn4\n' +
'8eightwoc\n' +
'khvcvqthree7rthjfivezdglhfnstbtjglxlpkztwosix\n' +
'72lxsfkmzrb1\n' +
'nmhqmmxlqnpfour8\n' +
'zbgtwonezksvdvfqzthreesix6dlc5\n' +
'6zvn6\n' +
'5pmrjmgvsdcsjlg86\n' +
'twoeightseven21cvntvr\n' +
'3qmqjjqtjskqtthree8sevenxm2\n' +
'four5fourmbdx\n' +
'jpdmdb35vkjdflmlt\n' +
'224\n' +
'six3msltlcgtrnttcvtkrnine\n' +
'nine1d\n' +
'eight6eight6\n' +
'sevenm7\n' +
'threelkngfmstfour9ninelj\n' +
'5rjbbxmchhfhl\n' +
'1two6679twozcgbbldmznvhd\n' +
'eight2tgxkhtfmrk9sevenxntpkhkvjb\n' +
'ninethreetfgtsh6ztcxczsxr\n' +
'9sjzjdeightmbvrvx4\n' +
'6fivetwodszsmffjbh\n' +
'sevenfivezcbqhhsntfbpkz3one3\n' +
'7onenine11\n' +
'glghbpvrbfqsfvnvpxlb5vvqkt8eight\n' +
'rvhqbhlmonenine96\n' +
'npgvjlkdxmsevensixxrkhlt5\n' +
'mhqf52scsgsxtwovcpq\n' +
'zrvznqpcjhtsghfb7\n' +
'five8threeonedl\n' +
'8threefiveknqhmm4five2\n' +
'xdbd4cchcfpvzthreenqqbdkfbnfspmklhvp1ztzs\n' +
'fourmn932eight6rjq6\n' +
'tdj3three\n' +
'2nine98lcpnbchtcfqvqmbrzlhzjjrcsmzgmd\n' +
'1tfive\n' +
'6cbhhqrvjkzfive4pbnrr5hbvdbxln8\n' +
'2eight8three\n' +
'lvveightwo9ninegrlptxdskq\n' +
'3xpcpqkrznrgq72six\n' +
'9pnczone4two4tzjktcktzeight\n' +
'6eightldtmkj\n' +
'pjc9nvbhjmhnine\n' +
'bznzg4sbdmhglddnvbrxtr5nineeight6seven\n' +
'51four7eightwopkv\n' +
'323\n' +
'3cxmrtnjdonehdsxlfneight\n' +
'7kfsxscrsrffour\n' +
'six2sixthree6\n' +
'2nljlkkdoneseven4dvkplq9eight\n' +
'31six9jqrgzmjlk\n' +
'ninefour659\n' +
'zjcfjzbfivesix2bqtnbdzlssvr\n' +
'4onehzrmb\n' +
'6dvfnpbdnr1fhtmdddqx\n' +
'phvgzphlvqeight1\n' +
'22s5\n' +
'fivetwo9\n' +
'gxczffbjgxonerhxklzvkmp89\n' +
'fbrxkzpsmb59997\n' +
'tmf6\n' +
'ninefournine8\n' +
'42fourtwoeightsix96\n' +
'vmhqthreeshcdtwo2three28\n' +
'lpzbfpfhxj8rbspbrjgd882\n' +
'9threesv\n' +
'6xvqch\n' +
'6sixdthree5sevensbxnxvsixthree\n' +
'five2jzsconeightm\n' +
'three9three69eight\n' +
'7789qfhlmznpqzrg3\n' +
'bbf5dtpqhs2jstcbkcfmc2nine\n' +
'eightmpppb6fpdonecrdrbjqtc\n' +
'nineeight1nine\n' +
'four2tpqrhnj8fivexmvhtsfive\n' +
'gbzzxdd8\n' +
'onehrjlhprzz5\n' +
'fourzxxpl2onetwo\n' +
'5four5two97\n' +
'threeeight2\n' +
'5one68656scpqt\n' +
'7qljfddcld1czjb6fivehtqcpnbjfnmrrthree\n' +
'9lrzbkvqmjfv5qkrlmjkrx436\n' +
'hfivetwoxgjkfc72two7\n' +
'gbbbnscg6\n' +
'glrhbfrfivehfkfplnrt49seven\n' +
'nine3sixninefive3zksdxtbbf\n' +
'ninesevenvgnlhpdb123twogfvscpk3\n' +
'fivefsrtpxzlltnfnine1ninevzsxbnine\n' +
'7nineone44bdxoneeightnfpckpdjsq\n' +
'rcrtqnnrm15\n' +
'eightfive8\n' +
'eight2dqzcjfkfsfoureightfmjrpdkqj9\n' +
'one69twornine\n' +
'fivefjpzeight6\n' +
'5qxqdcl7qzfqvmsfnnine9fouronedmdg\n' +
'7sevenone4four5eightone\n' +
'phxdrlcd3two\n' +
'fnoneight12vqscqzxdgdzsvfqggbt9zphpvndl\n' +
'eight6jhjqrvsgbteight2\n' +
'gdhznsvfmdeight6jpvdmrdsix92one\n' +
'onescsrmks474ninetwo\n' +
'51bmcpkkttczbsbhvfdzgfbccbllxskmtxvs\n' +
'61eight\n' +
'qfplfour7fourvhsbxtzrb7three\n' +
'ninefg8two\n' +
'8seventxeight3gzbvjmbcmzoneightrlx\n' +
'16twobghcqnfiveseven\n' +
'one26sevenone\n' +
'three4sevenone996fplzjqh1\n' +
'pkszjvhtdg9six\n' +
'eightfcbbchqtxbvzmdnj1fourkvldvbzltm8\n' +
'5sevenfivevhcrl78\n' +
'7bjmr96ghmzhzh641\n' +
'seven71\n' +
'ljstghtkzcthree64two3hbvbgconethree\n' +
'9fourninednbrkdfnxeight2zppqsnx\n' +
'zfjm8ktwofivezr\n' +
'qtfvmhvpthree4fivehsxkxnpchmfcvr2sixfour\n' +
'ninetwo3dthqone\n' +
'six2ncdntspl1fivenmxzxh81\n' +
'twoqtpfbfive8mhvkjstfp7gddzmmdnxqrvp\n' +
'threesixone3tgbtbone81one\n' +
'8vqmtnfkhm1\n' +
'zgtldxtbgxgfour8eight65\n' +
'hbk6threeseven\n' +
'1tpnrcfivejbqllpgx\n' +
'twotwo4xcppqxftxeight8six2\n' +
'2seven5bnvqdfbtwo8eightsflgdzqczpcf\n' +
'two45\n' +
'4kqrscxrsdveightflhrmcpxrnqfrzrsixkj5oneightbls\n' +
'5jttone1six\n' +
'nine95eight3fourseven\n' +
'fivepkknbrqfkdhk8ndt7three\n' +
'sevenfivetwo4vqkjlznxl9oneseven\n' +
'nlzrrsbqllsevenfive94threecmzbp\n' +
'qnszclmv6eightthreeeighteight1nine\n' +
'oneninesevenmmqpd6oneninenjvcrbgnjm\n' +
'jptwone67kqxkdfscsjmfseven14kz7\n' +
'threexzxlgceightfour8\n' +
'3fzbtwofivefour6\n' +
'hdr4plslvxqxm6sixnine\n' +
'one62ttrpmhjvfk1\n' +
'foursix5phpfcxzrrbhsv\n' +
'eight81\n' +
'7cfdqxdqjq\n' +
'69eightfive\n' +
'6nphsmsqsevensevenonefourbsmg\n' +
'sixeightsix9vk\n' +
'freightfkthreesixfour6hzdmrcqzbs\n' +
'vclmkqdqeightseven5eighteight5bbvzqlslt\n' +
'nfbzpffd198six\n' +
'jpeightwofivethreetfzgnpfive1\n' +
'sixseven2trjjh\n' +
'4ssfourtwopqsgvbvktk\n' +
'five8twoonefksixseven9\n' +
'5eighteight2g1six7\n' +
'fivethree9twonelgh\n' +
'4fourxbnhjfoursix\n' +
'lqdspqgjnnhxnine99oneninefourttpskhdzhq\n' +
'fskvvccb178\n' +
'eight3twogsjlqhfhr\n' +
'sevenklhxjjlzrx7sevensix\n' +
'84nine5zqjbhjsxvn61sixone\n' +
'two9htsj\n' +
'sixfiveninep75tgggjszfbsix\n' +
'sixbrthjrnnvmqgb8\n' +
'tpcb25twothree\n' +
'9fxkfzmqdgll\n' +
'cnqjxttzpthree2vfxrklhrmgsevenvsjkf\n' +
'tljlxbfbk43\n' +
'mcpjvsevenseven5three4\n' +
'cvvckfncxjlxrp381four1\n' +
'63vksn7six185nine\n' +
'fourhbg8thjnmvlctsixninejpjkxqhcljrvgrm7\n' +
'649eightone1four\n' +
'nrmjcbpdsb6fourpcbpb\n' +
'one6nineone65\n' +
'g2x36\n' +
'nine9sixvbnzsqbrj\n' +
'four3sixhfngsjrsnth977\n' +
'seven9692dfchqbdzztmfztl\n' +
'six1pdtgbdhzmqtmhz6ninetwo\n' +
'rzjssbsz92six1four\n' +
'4sevennineninesixvgjsxqrgnbgfpzpggmkzjrq\n' +
'5onefourthree7seven\n' +
'9zgjt\n' +
'eightnsrq37qhthree\n' +
'czknlpbntwoseven1twopfhfdhrkgh8sevennine\n' +
'3eight9\n' +
'sevengltpjfpkb32ninetwo5\n' +
'five8ninehxgkcfxm5fthree4\n' +
'8three9drtnqx\n' +
'lldtcdsfvvqcsvprgggnfourhklqqsjbvttskq3\n' +
'vrxmtwoftjngsfour1sixlfbdkxbppj7\n' +
'khvvrrhc2eightfive9\n' +
'kmsdthsbffjxdgfvmppgrfglxkplv2pvtpm48\n' +
'49gzlbspqv45qdsvp9five\n' +
'threehzjcp6threed4\n' +
'sevenone6onefivefourcpznxpseven\n' +
'85zc6\n' +
'eight92fccninefourthree\n' +
'36hpqnpmmxrhsftwotpt\n' +
'11six6\n' +
'5vzkjxh\n' +
'4ptvlmns\n' +
'19f41seven7twonesmr\n' +
'39threevrvjhfpzmp1seven38\n' +
'five6eightfourqjgfvhqjclt\n' +
'ktjsgzqkzgplz85\n' +
'242sevensevenninelrxhqvddb6mbfxmx\n' +
'54threekfcqtpfgeightvlm\n' +
'sixfivetwo82seven8threes\n' +
'vtckldxdssix5mfjrmhvtlninemq47\n' +
'977sspjhmddkznine1sevengjnm\n' +
'ninexmjfhhnhhv3ckndjbdxjcfive4\n' +
'toneightnine96\n' +
'twoxfsix5qtjghvqnjseven9six\n' +
'fflplfmqx73fivethreeqmsncsl2six3\n' +
'xxvbfcbb7kkjzgmtvp38df2gcfhjtt\n' +
'knthlxc795foursevensevenseven\n' +
'twof91two4\n' +
'four9sixjkjqcrnine9eight\n' +
'sixnine1two5\n' +
'mrrhthtfbszfxqpkhs57\n' +
'five985tmcr\n' +
'l4eight\n' +
'twosix7\n' +
'ggztprpshxbgbvgllfjxr7x2ql\n' +
'9one6nine3xttqxqjnjsvknzg\n' +
'1nine8172\n' +
'1npfxpgcmbckgtcgvlksevenjfdbs8sevengqdcsn\n' +
'eightzbjqsix613nine\n' +
'sixkfczsxbnpfourzsninegtjkg5five\n' +
'47four4gtwofive\n' +
'jczqhs41\n' +
'2jzmpchxv\n' +
'xxxx8eight36sixpzpdvvvvntwo\n' +
'two649nine6\n' +
'four36sixhfzslcnhpssixthree1\n' +
'9eightninefivez\n' +
'933cvvf1sixsvkr21\n' +
'zrsnsqdcfmxm9fsjqfzd7\n' +
'five7sngmpcz\n' +
'sevenlzrzgddch5dnvvkzf3sixsix6dnhtbkq\n' +
'5lbdtxdzoneone6\n' +
'vkjvhl4mslfs\n' +
'pvgvmtxvsjdpth39\n' +
'gg83ltnfcsv4seven\n' +
'lksmpxxd91dnkjq1fktbfmvgh\n' +
'djfslttn2\n' +
'onefour9three8sgbtlbtsmh\n' +
'qnrrtjxtninefive88sixmhhbqs78\n' +
'mgrpmfvvxf37onefour478\n' +
'two26two\n' +
'4three3five767\n' +
'eight5l\n' +
'3pm8cpkczckxfc\n' +
'6nine5one2841phpgfxhfr\n' +
'4threetwofxblrfnfhj8eightone\n' +
'ninetwotwoqk9fourqmzzz\n' +
'211127mkhpmsr\n' +
'mssppjqvlt75xjccfcjfiver\n' +
'57mfour\n' +
'rdj6smlgs\n' +
'gjllvdmmgktwodhnnbsfourbvqvlvpcv6v\n' +
'seven2fiverthjdnfqgnine\n' +
'7sixtgns8xfmrx\n' +
'sixdcfpbdt3lcnlsxxone1\n' +
'9jxpl5sjzqxxk9\n' +
'four2bzcdrbmfiveseven1four\n' +
'jtwonefivefvftvbpsptftbvpxzz2fhgmlqrfsevenvrznjjlchbqtrgbb\n' +
'4seven3crjjzzbseven78gkcjf\n' +
'djnqxxtsevenpthdvddhdm5977three\n' +
'threeonethreex92bnmpv3\n' +
'klgxtpg4one3kcnhfqp\n' +
'2dhsbc98\n' +
'mrqfvbgjqnfpggnn2spmjkvbchpzpcgcmzvcddtl7seven\n' +
'3xccrgznljpskhxnqbtjtcvmrmthreef\n' +
'4jphblzdzpfouroneone\n' +
'68twotmmsdvxtwotworrjvzfiveseven\n' +
'864861\n' +
'1qzcctgzsixjtlztmdrtd2\n' +
'4seventwo62\n' +
'one8kjkjvtvhfive6tsvqnine5tkdsv\n' +
'7m2\n' +
'twoeight77sevenfs\n' +
'vb8gflhvvf7hleight54\n' +
'fourcxmkbmmzbhz494gncgbsj\n' +
'bjzzsllj5gphkfnrncp3eightnine\n' +
'four73\n' +
'psvtbtf93zgdpmjxrmvsjmceightpsmhvhtfrthree\n' +
'492fkvcvcrrkhcxtgdbdclzn4\n' +
'bmf5\n' +
'twovqfxqsfgr8glst1three1\n' +
'qhqfglndqzbrhvxjdhgddnfl57vmzseven\n' +
'tptfourfour4threembr2\n' +
'94four\n' +
'57xfnxbcqntkrtzpzcvfbxtjjoneone\n' +
'7nbsmqjqzthreegddkfournbdxlrrl\n' +
'jdmnzjpxklfjbnbqtbc2onefour4ninefivenrhdkzpjcn\n' +
'9621nine4\n' +
'3qbtrqn4\n' +
'3bs\n' +
'5qncklxjnzr4seven\n' +
'64sevenjdpmgpvqszcb\n' +
'sixeight3five89\n' +
'4twothreeseven8nzd1four\n' +
'7ntnp8xqhs\n' +
'fourxfzdrjseven8four\n' +
'3lmgfpfbkrb\n' +
'jqfsptcs98gjgvgbeightsevensevenninesrqxjoneightdvb\n' +
'fivesrzpr9fcntvgjeighttwonjmthree\n' +
'2hdtrbvfjhpt3seven439\n' +
'th8sevenseven\n' +
'xdnbklcrz7two6fivetwosnfszfffqtrbhtr\n' +
'6sixninesdqlrc\n' +
'fourxjtddtqgdssevenfive6\n' +
'2ninethreeone\n' +
'4four8\n' +
'five62fivefivermd2six6\n' +
'eightsevenfour8thrmnsevenflmhqvmptnnine\n' +
'eightdd4threeeightone7rtf\n' +
'gkkonerz668srfkl\n' +
'zlt6cv3ninetwo\n' +
'3seven3bgklkfceightsevenbhvjjd4\n' +
'9seventhreellgvjs89\n' +
'fivemjlvqdtp2czcht\n' +
'kldcmlddhzthreethree2ndzqcmlsthree9sevennine\n' +
'tmxcpqchmqhzbjhkrpjtq217four\n' +
'2twogssdgqxtwotwo157\n' +
'twotwo8eightsix\n' +
'91gcvsfbxnr2\n' +
'btngjhhlpnqthreesixtwo1onejrnfxldzvx2eightwovxj\n' +
'9eightsixsixtwonineninefive\n' +
'ninethreeeightxlx3bcfdvqct\n' +
'5krhtdqfpc5pq\n' +
'four6xzqs91ninetzhpjdtdkxxthzhp\n' +
'ponefourksmmg5qqnldbdbbrtlxtnnr\n' +
'four3rc\n' +
'sixfiveone58nine\n' +
'ljdbmmlgg7\n' +
'six5fq\n' +
'5three3sevenhxlsix4bkkbsfdsgnncf\n' +
'twofivefcfb6\n' +
'mtgtkrrxhnine7zbqzdnonethreej\n' +
'twoonesevenscpqxpmxeightjgbfour7\n' +
'5gfcknine\n' +
'fiveeightseven9\n' +
'foureighthcstwonxrjflrbzpfourfive5\n' +
'9cxm\n' +
'95rjzhthree7sevennineninefour\n' +
'7six9zghtzslldb2ksfrcrntjfjcq\n' +
'2seven9nine\n' +
'86tncfxmg26\n' +
'sevenfivesix2eight\n' +
'634ldmgqdntcbeightone\n' +
'3vxvqbhjgjv1skrseven\n' +
'22one\n' +
'ntfsixone4zrjglkone8pvgqrnnppsxxbqh\n' +
'foureight8rrrxbt\n' +
'mmkpqzgbfn4ljdq8onekz\n' +
'856six8three1\n' +
'onez766\n' +
'42eightfivejzbpgl2crltttkhfx\n' +
'4eightlpksrlkjzpjxh7\n' +
'five6onefive6\n' +
'seven1eightxtf\n' +
'txdczfnngfxsix4\n' +
'fivezvkcjczgz1gfpsdspsm45l\n' +
'4gvdvlzxninedfndgfkdsixncfour\n' +
'2two915sixrqjksjr\n' +
'cbjhntsevensixfivefgpzzkgkt7pkmggrptwo\n' +
'jplfnvvgls4cnvqtkjffcqlfkxqm9zvzvsptkfive\n' +
'7sevenvqbvjrpnglcxsbqxttfdrv\n' +
'57sevensix\n' +
'2seven65smgpnfbm4pjbpq\n' +
'sevenhsix31drcreight\n' +
'9fivejtbqkmkf41xfninethreetwo\n' +
'threeeight7sixnine\n' +
'threeeightsevenseven8\n' +
'four3qrz19sixmvkrhjbb5\n' +
'mtfbjrknlrtwo36eightzkslznj\n' +
'kndkhvzsghsdqpfonekdqjfszhv6hmrgbf5\n' +
'gbxjrvh27five675htszone\n' +
'6rlqppzkcsg53two\n' +
'sevenxnrnmrh3cpllvxsdvd9\n' +
'gvtrgstx6xbpgpjthreeeight\n' +
'hlzvszhsix4\n' +
'dtxjcxfx7spkprqgn\n' +
'7five6nineseven\n' +
'6ntctkrjdvl1pgjhm\n' +
'qreightwo395\n' +
'nineone4eightsixkt3four\n' +
'19five44eightrtnseven\n' +
'1v6jskjjkzjthree\n' +
'fouroneeightfivenjpcn8ggtvz\n' +
'rhtjdxdljht919five3\n' +
'sixsevenktqxltbhseven28\n' +
'26ffncztbln\n' +
'2eightsevenstv84319\n' +
'jrqhbkj93tmrgfgtlffour97eight\n' +
'84two9five\n' +
'27seven86six9\n' +
'nxsgbzvlkm9six5six1\n' +
'five3fxmeightfourthree66\n' +
'1nineeight2one\n' +
'tbfvqssbxl1meightsevenpbk\n' +
'8sixthreexnpvk9lgjhpzeight\n' +
'qvchcvkkgsbeightzhkgxjnine1\n' +
'4tkcd1threesix3\n' +
'fjmnhf9nine9kmmeight535\n' +
'five9nrvxkhnfour\n' +
'2eightqdmjsninej\n' +
'764nine1two\n' +
'hzcxjs8foursb\n' +
'1sevenfivejlcn\n' +
'2dzrvmnd9\n' +
'nine8j9qgfivethbxfcvsixthree\n' +
'1threes\n' +
'fivebhcl8five\n' +
'6nrrm\n' +
'three7fourdr\n' +
'czqkm8qmbpzbbfour5seventwoczrj9\n' +
'krrjcbqltjfourfive1one7vhzftwo\n' +
'vsjxsffrrpz3jmrgbcbjh\n' +
'19sevenvlfndx2onetwos\n' +
'fourrshljvhgv18ninenbgfour\n' +
'h2sixgdlxbcqjmz23\n' +
'btrhktjxdnvckdc5dz\n' +
'fbzrcltwo12\n' +
'sevenfour8fjgvsqk29pgfpzsmj\n' +
'two5fjpdjtqttt36\n' +
'eightljvvhplp5nine\n' +
'53eightrptfckvfczseveneightsevenqmxjpvhgnfb\n' +
'1jtngmjtpftgzzdmjfzhmtxf\n' +
'pgphqgqvjzfeight67\n' +
'ntqfktninefivebfrthreenine8\n' +
'fthfnml152zqseven1zvsix\n' +
'six9sixthree9zsrzpxnvqp7\n' +
'xfqjxgjtzf19nzkdfourtwo\n' +
'jqntpbdlpsrhsfbvsevenjgxhkcq5one\n' +
'1fivevstjfourf\n' +
'prdvlvpzjxrtmdfoursevenfive3hxvblpmkvh\n' +
'dzjdfive7four1eight95\n' +
'7ql1nine1threetwosjv\n' +
'twonine3four\n' +
'6dbjxsbqntbhrfsxkl6six4eighttwotbztgzxtsk\n' +
'two9bqbnfdn5\n' +
'8frt3vcd8h\n' +
'fhnrjsixthree3\n' +
'pfddphghh41\n' +
'sixfive1151\n' +
'6six9one8rrjvpptljmbssk5cprgg\n' +
'49ljkjvjcbbthreesevenrqhvmtspftwo5\n' +
'nine8615qtxm8\n' +
'f96five\n' +
'9sbvxpqjhpjeightjxvbxs\n' +
'cvssllqx32\n' +
'4lbgdsrftqcpsbscvmkhonezrfourtmpnnms5kzrv\n' +
'7four5761seven\n' +
'dktmlnzhpqcnhgk5\n' +
'cgzgckzxcrthlb27tcfourfiverggslx\n' +
'43eightlpcgtvx\n' +
'szkqjfmsixthreegffszqhhninefive4gdgn1\n' +
'rhfzbnczlzjjfskg838\n' +
'pkfoneight1five3five\n' +
'39sixnineeight6\n' +
'hzjpqnmtndfive6rpkgcpbvx3two1\n' +
'9nine3five373\n' +
'kxccthreeninefhcvzh36five\n' +
'three5mqnll1mtgbfhr\n' +
'seven5tg4eightcctnzthldreightsctgkshdgr4\n' +
'six4fivefoureight3\n' +
'qthree7\n' +
'4threethreetwotwothree1lvkskqgn\n' +
'69lczgone8frk\n' +
'68mhcnineeight5zncqz5\n' +
'eightbsjvcjnn7fourfive4seventhree\n' +
'five9eight\n' +
'one4four5four8three\n' +
'fivesnkkldmjxfgnqrmcjtkeightgsb8\n' +
'sixscmqtfourgjzxmtcqmt2zgnkzspb73\n' +
'7fmdrpbeight151stdxxz4\n' +
'teighteight1557twojkccnlsgxp\n' +
'sevenmhkptflv1\n' +
'ntrlqjtxjqcxltg138\n' +
'one9zpthree9\n' +
'two7mtdj69\n' +
'tclxbdeightonedtjsdbone17\n' +
'5173\n' +
'q8ninethree86\n' +
'2eight5one1seven\n' +
'9onexcckgdxb\n' +
'l1jtwo\n' +
'ktfnfjm4\n' +
'7lxcrfpvxggfkpfnhjmm36mjslmhtfpmeightfiveseven\n' +
'bvhzdf74onelhptjshq\n' +
'eight3srvbqxmcnthree\n' +
'fivesix2ptjbknone\n' +
'vggmbmqspdj7six45eightfpglndqmsm\n' +
'eightsixcfour2\n' +
'kctpnpdbsfour49zncpnxbrzvqgmm\n' +
'7nine8seven446fourfour\n' +
'dkmt1pdpz\n' +
'eight6xthvzjcjoneone6five\n' +
'pzpvrvbbrbdsdbh8vonemkntqnrpn\n' +
'1xbvsmqbmbjfeightsjsr\n' +
'threebfcsllrone74tfdmrjnine4vhfrv\n' +
'5pt6onebrknnstfcn999nine\n' +
'hz8vntdnmvtvnine\n' +
'cgzxctckcvpvdg24hrdztmqctqmqkjbjjgl\n' +
'pbkmkcdfqsxgtprrpgprfgk96sevenzxsbjklsbrsmbeight\n' +
'sevenrqfourdxqnnlj89rnine8\n' +
'ninepqldpssh9h\n' +
'5bjdnine8threefour\n' +
'1onenineeightmnglcrd\n' +
'xjsmppqm56seven6qqdsgpxkkd\n' +
'six79fourfour1\n' +
'2jrdzvmfone2six8\n' +
'sevennssvhnpxkl3dsdqlhqxt3xkpqnine\n' +
'foureightone1onesixnqlrkndqzf\n' +
'742five25ninethree\n' +
'onexc87gbrgsdzdxqvqfns\n' +
'43zrsfzzsgm4fivezqxxztkp\n' +
'qvdnfvjlhlmznine1twothree\n' +
'8hdpjzkzblbcjfcl5ktdjfoursixfour8\n' +
'twofive7phqgtv\n' +
'six7ftkmlzfx\n' +
'4sixsevensix8\n' +
'1qmnxhfjsrq\n' +
'3fiverfqqq58two\n' +
'sbqhm6\n' +
'9xxtone6\n' +
'ln5vphjcpqhqqzdmpj\n' +
'sixsixcvnkvvrq3vrlgfvzbf\n' +
'8qkmsvcgninebfnsgmvk\n' +
'ninemjsbpppdmknqhjkvcqkq1four8fourseven\n' +
'sixsksgflz3fiveoneqmrk9\n' +
'945cskxxdtnt42\n' +
'ninesixxsfmcxkfour9gfmgthree\n' +
'sixxgskmzdpsvlxb8five2\n' +
'6hhqdfbjthreeonefour\n' +
'4onemzcgbh\n' +
'onesix1five\n' +
'3sevenhtqtbpp5seventrrlpfmg\n' +
'65fbcsix\n' +
'8rtghmdsfjqv554\n' +
'1cbnhbdrczvmfiveplsdjq5eight\n' +
'threeninemqfbrtlbpc85three62\n' +
'four88fourjttl23\n' +
'onefivejndtjrgkqfmzrlqv69twoneqj\n' +
'tworzgmq434qtlqtlfqdb2twofour\n' +
'g74sltkbkzgmthreegscb6four\n' +
'eightzgshcpeight5one\n' +
'fqprbftzmjlmdr4jssixfrfgsrggzhgxktqr1\n' +
'kdzzccthree8szbzqtq\n' +
'threefourcbnjx6vfbgrcmtnine39\n' +
'eight7jscjxtvxxbbc\n' +
'61tstktfive\n' +
'2threeseven\n' +
'rxsfrxqlmt9\n' +
'zqptzffzmf9\n' +
'b4eightthreep7six\n' +
'onethreebvnqhkdzfkbjrgnjdtvzgv7sevenrhp\n' +
'sevensixnndcjznctg1\n' +
'm2\n' +
'15sixvmsqnsmjv7\n' +
'242\n' +
'25kvtgjnxtk43eightczvl8\n' +
'eight8sixthreelcfddgn1hzqxjfvtjzqpkzdltdpjb\n' +
'eightfiveonerxz1\n' +
'mphmgxtqjlxjkx6rzprj1hrbtmnteight\n' +
'jldrhxvgghbrv1\n' +
'15fourrfzncjlgnineeightxhnvv\n' +
'566three1fbs97\n' +
'7pqmgdsix98fiveone\n' +
'6qqccfgxhbhdhjzmnqqqmb\n' +
'five1onepxvdqht2sevenrggfhmtwocmmfxplbmp\n' +
'cnine2nineeight741\n' +
'kcggzltqv9trcznjzfkmbfrfqsvvzsfnlh\n' +
'jttwone6dreightssfptmbc\n' +
'3blslthreetmtwo83\n' +
'78965rjgchhgll\n' +
'5ljmbjqk7hgjdmtgxpzs\n' +
'twosmk3two4fiveeighttwo\n' +
'qttftkrmrpscczdtxkcfournineztkkfour1\n' +
'71flmtrrssgcrxlktdmpbkh\n' +
'vvbmqjh33soneightrg\n' +
'3hlzmdpmzrrfqczv\n' +
'seven8twoxtzjhq\n' +
'64h73jvqjzlfcfdfour\n' +
'sixznbkx66spzg\n' +
'dtseven6\n' +
'seventqxtnkrvv1sixseven\n' +
'cgtshp1\n' +
'4nine8\n' +
'1kptdlhbsixthreeghpgbjjr\n' +
'pk7four\n' +
'7hbdflbcxdfivetwo\n' +
'eightzrzcrnlkd2hrdpl\n' +
'twodpsix9fivegkdkgtqlsix5four\n' +
'4gfgvsevenmgzkpdsix4\n' +
'3eightqlg29\n' +
'6fqvzgdbmgjl57eight1nineeight\n' +
'two8xpqlfp3njzdfivecvx2\n' +
'gbtwoneftrjc733four\n' +
'6gqrfzrqnthreeseven4sevenltfpfour2\n' +
'gtgnjsixdxt4five\n' +
'mmvrthqbkvvl37\n' +
'3one4fourtpspnczvvbvlrthxc\n' +
'2eightjqmjqkninecmcfkpvvxl\n' +
'fourninethreethreebqvvzd6eightwor\n' +
'7four1gbnjmmbp1sevensztfrvzx5\n' +
'6one5hcdqtfkfzbl54five\n' +
'93bnghqnine\n' +
'cxjvtgmgd7qxqxmxv\n' +
'6538three6threehvqx\n' +
'95sixseventwoone\n' +
'one86nrfddkxnlgvglqbdxfnf6nine4\n' +
'8zltdpcmctqkhhnxgcxsbphxbksix3\n' +
'rrdp4psctpgdpm61eight6\n' +
'cxgvfqhvsevenrpg8threepfqxphrjkr\n' +
'fivemnsjxdmhqkzhxv4\n' +
'5knvlqvr1fiveqfpjlqltwokjf\n' +
'threeonegrxgzsvdhkdcmzvfpseven5zmfiveseven\n' +
'eighteight717pxblll5sevensix\n' +
'2cnhcmftwosix\n' +
'zzbdfnine3x55\n' +
'one485ninecknv\n' +
'7onesixonesrptdsixnine8eight\n' +
'9fourtwo9kmjmbdnnvjjfgxdc\n' +
'foureightonespxsprvxpmgqqcdtz5r9\n' +
'39hzsklqnzpfivepsfjhkpbpgvf\n' +
'7five7threevqjbnthree9ccv\n' +
'qlnoneightfnineninetfdmb8msixcxcmjxpvfr\n' +
'sixeight2xflfivesix\n' +
'jxxzbnine5tlhzrzq54\n' +
'6eight7311\n' +
'8twontzkqkdg6ninesixzbzone6\n' +
'eightsixfournine9\n' +
'jmrd4\n' +
'78threefivesixseven8gfc\n' +
'rnmcgvmponeeighthxn1\n' +
'seven682mdxrvzfshseventvpgvv\n' +
'eight5jftlfcbkfr\n' +
'four4seven3\n' +
'4nsmkvsxc22tj\n' +
'three4435\n' +
'563threesixtwo5six\n' +
'qxlzsgvkbh4\n' +
'xoneightsixfourhlrttrld85onetwotfdx\n' +
'7dvlkcphhrdrzttqn2ztxvdbhdhtplmcbhphxnvg\n' +
'hfzd59nineonexznhg\n' +
'onetwo29threex\n' +
'3four9eight\n' +
'jcqprfrm6nmzplggbrnine\n' +
'kone8\n' +
'hgn9pkrxmrtmtwofsfdmbgnmsfourone\n' +
'8pljqhtm\n' +
'4eight6fivetwohbrxgtbb6nfive\n' +
'hgdnxvkhghfnbvgsqxn39eighteight\n' +
'tzcsdqkvkhvcrngeight226rvvz1xkblchlg\n' +
'9qlpvsvdkxgbsixhnxfrcfmx6seven4one\n' +
'9bcppqvxt7eight3five\n' +
'5tnmcnrlsnqpkrfprtwonm2four\n' +
'8eightndzgrtfgpm25tsdcjvckninebchlrd\n' +
'9sxjbgrvtblnxfphqsix571df\n' +
'eightckd32oneightk\n' +
'twotkvsixoneqnzjd2mnhhp\n' +
'two3l5sixfivecgkr2\n' +
'nine4two\n' +
'964five\n' +
'seventmxhtjnbmj7nlkmbgmbxbhseven\n' +
'99bgdpvhninesix4threeeighteight\n' +
'1xhzbjtmfcpd8lqzsthreexxjvbhpfszh\n' +
'five4oneqnponep31\n' +
'xlzctwonine5mxfive\n' +
'8hjrqxseventwoqsfive8\n' +
'four1hcqfdvonefpfhxmssnn6\n' +
'zmhs3sevenndfx795\n' +
'fourkrlnine1\n' +
'four8mljmjmfpjscckqmxjhjnine43\n' +
'2five5threegqmgkqm3three7\n' +
'8fgnkjssix\n' +
'twoonejqnfphmf77z2threebsp\n' +
'57pstfv1nine58\n' +
'6fivetbvnnpb\n' +
'1331gnrbthgn\n' +
'2nxpxpcbzdbgnhhrskcdrsix\n' +
'onegdq85\n' +
'fourcmjlrdtstwo81tpbnttcntnineoned\n' +
'jrqfmvleight2ninetblfzlhnsjhdrpltnt\n' +
'nineqzp8\n' +
'19qseven\n' +
'fourmmgfj68pgdgvfour3\n' +
'twovkfour9five2\n' +
'1cmtgkdn1\n' +
'6sixsix\n' +
'seven9sixnine\n' +
'4vbhqnqsdvfour1four4ftfvpsm\n' +
'dsbqseven9gshsnxxvf4ninez\n' +
'2jqpdmlt\n' +
'seven759\n' +
'threecxsbfourtwocnfbzkxgfb7sixeight8\n' +
'8b26twotwo\n' +
'7rv4five174\n' +
'ninegdjrbzjk97\n' +
'two1ninesix\n' +
'dmr96\n' +
'dpzmhthreesevensixxhqrmvlgkpmlmtm1\n' +
'5191ninetwopbbmkf6\n' +
'663nine331nine\n' +
'4gjhqpfivesevens\n' +
'7pmfk29dxhqgmkgxthhvsztvfour\n' +
'2onenine\n' +
'lmftjxtjcfour3hjqgkcd186\n' +
'twovgrrxgdj7238lvfr\n' +
'7vnsklc\n' +
'6sixfive9nljzpcsxzjknkjxknbjsfd\n' +
'four985veight49c\n' +
'2grvszbbkqjpfmvqcrktvvl\n' +
'qvrscfptmr9934jx51\n' +
'58\n' +
'xfqzrsj5one\n' +
'njdrlfxmrmmxtrsccgrpjcfmf25\n' +
'ninesix1\n' +
'fivevnfvfpsnxcd9eightthree\n' +
'hldsrqrjtb6onehtleight2three\n' +
'six3three\n' +
'6sevenfour\n' +
'sevenrvchgqxpbm392zvsncffrhnine\n' +
'796fourtwo3frkdqzgtwo4\n' +
'ninexrxf5rjcqxqxkktfrx75four\n' +
'sevenonetpfiveqpcgsnmqqkrcnmctrclptd6\n' +
'kgrnm6816pcxqnqd6gvgcsxxrs\n' +
'one9rvzvlrnzhbnnknxfiveeightwols\n' +
'71gxxrzbzgd65\n' +
'nzm58972one49\n' +
'626hljmxrkscqsxhzm\n' +
'eightss6fivetngplspntpmsrdpbk\n' +
'3nine3\n' +
'five4one\n' +
'jglzllhf1cl683\n' +
'5eight34sckhhxrtwonem\n' +
'eightksevenmgvhczgmqtwo1\n' +
'dpjfj4znzjznttwo\n' +
'gsfbsz67threeccjtsg\n' +
'six76sixsevencqtninefour\n' +
'sth3sndpsvnx4\n' +
'two1mndnzjonemlvmlfive3\n' +
'zkqzhdt2rtlpf\n' +
'eight8951five6\n' +
'1qxfvkbmtqvrnztnrztplqldhrmdpgtvcggsixflknn\n' +
'3fgldgs6six182\n' +
'ptsrdvvzhfourmgfqseven51klvfqnine\n' +
'kbktwo4lmkmseven1\n' +
'gkhpvkeightsixronethreeone2\n' +
'8six5\n' +
'frqhlvzrjrxfive2three5g\n' +
'6crprnxzzvktwosixl\n' +
'fgc1three9pszkbrhdpmmqnkvbsrttgfjpxg\n' +
'9twoseven4kvtjxd\n' +
'7five1onetwo22\n' +
'7pdjjjfcmq26four\n' +
'3five4two1dbqztzfxrxfdhh\n' +
'nzgtvl4tvseven\n' +
'8qvcrbdvjfqvdsjlfltlzfoursevenoneeightbmvv\n' +
'sixfconesix6three1sixsix\n' +
'eightone9nbdrkonenine8\n' +
'3two5lbrb43nine7\n' +
'foursix5eightfivezvnbsevenjcrzhxdzfb2\n' +
'jmgnfive7ffglffpjlvbtvl935zz'

adventCode(input2)

console.log('Server running on port 8080')


